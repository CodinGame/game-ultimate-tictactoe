package com.codingame.game;

import com.codingame.gameengine.module.entities.Curve;
import com.codingame.gameengine.module.entities.GraphicEntityModule;
import com.codingame.gameengine.module.entities.Group;
import com.codingame.gameengine.module.entities.Sprite;

public class TicTacToeGrid extends TicTacToe {
    enum State {
        ACTIVE, INACTIVE
    }

    private String[] images = { "cross.png", "circle.png" };

    private Group entity;

    private int centerX;
    private int centerY;
    private int cellSize;
    private int lineWidth;
    private State state;
    private State prevState;
    

    private GraphicEntityModule graphicEntityModule;


    public TicTacToeGrid(GraphicEntityModule graphicEntityModule) {
        this.graphicEntityModule = graphicEntityModule;
        state = State.ACTIVE;
        prevState = State.ACTIVE;
    }

    public void draw(String image, int centerX, int centerY, int cellSize, int lineWidth) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.cellSize = cellSize;
        this.lineWidth = lineWidth;
        this.entity = graphicEntityModule.createGroup();

        Sprite sprite = graphicEntityModule
                .createSprite()
                .setImage(image)
                .setAnchorX(0.5)
                .setAnchorY(0.5)
                .setX(centerX)
                .setY(centerY);
        entity.add(sprite);
    }

    @Override
    public int play(Action action) throws InvalidAction {
        int winner = super.play(action);
        drawPlay(action);
        return winner;
    }

    public void drawPlay(Action action) {
        Sprite symbol = graphicEntityModule.createSprite()
                .setX(convert(centerX, action.col - 1))
                .setY(convert(centerY, action.row - 1))
                .setImage(images[action.player.getIndex()])
                .setBaseWidth((int) (0.8 * cellSize))
                .setBaseHeight((int) (0.8 * cellSize))
                .setTint(action.player.getColorToken())
                .setAnchor(0.5);

        // Animate arrival
        symbol.setScale(0);
        graphicEntityModule.commitEntityState(0.1, symbol);
        symbol.setScale(1, Curve.ELASTIC);
        graphicEntityModule.commitEntityState(0.9, symbol);

        this.entity.add(symbol);
    }

    private int convert(int orig, double unit) {
        return (int) (orig + unit * (cellSize + lineWidth));
    }

    public void hide() {
        this.entity.setVisible(false);
        graphicEntityModule.commitEntityState(0, entity);
    }

    public void activate() {
        state = State.ACTIVE;
    }

    public void deactivate() {
        state = State.INACTIVE;
    }

    public void animate() {
        if (state != prevState) {
            if (state == State.INACTIVE) {
                this.entity.setAlpha(0.5, Curve.NONE);
                graphicEntityModule.commitEntityState(0.9, entity);
            } else {
                this.entity.setAlpha(1, Curve.NONE);
                graphicEntityModule.commitEntityState(0.9, entity);
            }
            prevState = state;
        }
    }
}