package com.codingame.game;

import com.codingame.gameengine.core.AbstractPlayer;
import com.codingame.gameengine.module.entities.Group;

public class Player extends AbstractPlayer {
    public Group hud;
    
    @Override
    public int getExpectedOutputLines() {
        return 1;
    }

    public Action getAction() throws TimeoutException, NumberFormatException {
        String[] output = getOutputs().get(0).split(" ");
        return new Action(this, Integer.parseInt(output[0]), Integer.parseInt(output[1]));
    }
}
