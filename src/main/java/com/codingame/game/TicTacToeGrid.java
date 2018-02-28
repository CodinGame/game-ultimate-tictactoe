package com.codingame.game;

import com.codingame.gameengine.module.entities.Curve;
import com.codingame.gameengine.module.entities.GraphicEntityModule;
import com.codingame.gameengine.module.entities.Group;
import com.codingame.gameengine.module.entities.Line;
import com.codingame.gameengine.module.entities.Sprite;
import com.google.inject.Inject;

public class TicTacToeGrid extends TicTacToe {
    @Inject private GraphicEntityModule graphicEntityModule;

    private String[] images = {"cross.png", "circle.png"};
    
    private Group entity;
    
    private int origX;
    private int origY;
    private int cellSize;

    public void draw(int origX, int origY, int cellSize, int lineWidth, int lineColor) {
        this.origX = origX;
        this.origY = origY;
        this.cellSize = cellSize;
        this.entity = graphicEntityModule.createGroup();
        
        double xs[] = new double[] { 0, 0, 1, 2 };
        double x2s[] = new double[] { 2, 2, 0, 1 };
        double ys[] = new double[] { 1, 2, 0, 0 };
        double y2s[] = new double[] { 0, 1, 2, 2 };

        for (int i = 0; i < 4; ++i) {
            Line line = graphicEntityModule.createLine()
                    .setX(convert(origX, cellSize, xs[i] - 0.5))
                    .setX2(convert(origX, cellSize, x2s[i] + 0.5))
                    .setY(convert(origY, cellSize, ys[i] - 0.5))
                    .setY2(convert(origY, cellSize, y2s[i] + 0.5))
                    .setLineWidth(lineWidth)
                    .setLineColor(lineColor);
            entity.add(line);
        }
    }

    @Override
    public int play(Action action) throws InvalidAction {
        int winner = super.play(action);
        drawPlay(action);
        return winner;
    }
    
    public void drawPlay(Action action) {
        Sprite avatar = graphicEntityModule.createSprite()
            .setX(convert(origX, cellSize, action.col))
            .setY(convert(origY, cellSize, action.row))
            .setImage(images[action.player.getIndex()])
            .setBaseWidth((int)(0.8 * cellSize))
            .setBaseHeight((int)(0.8 * cellSize))
            .setTint(action.player.getColorToken())
            .setAnchor(0.5);
        
        // Animate arrival
        avatar.setScale(0);
        graphicEntityModule.commitEntityState(0.2, avatar);
        avatar.setScale(1, Curve.ELASTIC);
        graphicEntityModule.commitEntityState(1, avatar);
        
        this.entity.add(avatar);
    }

    private int convert(int orig, int cellSize, double unit) {
        return (int) (orig + unit * cellSize);
    }

    public void hide() {
        this.entity.setVisible(false);
    }
    
    public void activate() {
        this.entity.setAlpha(1);
        graphicEntityModule.commitEntityState(0.1, entity);
    }
    
    public void deactivate() {
        if (winner == 0) {
            this.entity.setAlpha(0.5);
            graphicEntityModule.commitEntityState(0.1, entity);
        }
    }
}