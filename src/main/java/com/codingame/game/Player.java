package com.codingame.game;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.codingame.gameengine.core.AbstractMultiplayerPlayer;
import com.codingame.gameengine.module.entities.Group;
import com.codingame.gameengine.module.entities.Text;

public class Player extends AbstractMultiplayerPlayer {
    public Group hud;
    public Text message;

    @Override
    public int getExpectedOutputLines() {
        return 1;
    }

    private static final Pattern PLAYER_ACTION_PATTERN = Pattern
            .compile("(?<row>-?[0-9]{1})\\s+(?<col>-?[0-9]{1})?(?:\\s+(?<message>.+))?");

    public Action getAction() throws TimeoutException, InvalidAction {
        try {
            String playerAction = getOutputs().get(0);
            Matcher match = PLAYER_ACTION_PATTERN.matcher(playerAction);

            if (match.matches()) {
                String msg = match.group("message");
                if (msg == null) message.setText(" ");
                else if (msg.length() < 20) message.setText(msg);
                else message.setText(msg.substring(0, 17) + "...");

                return new Action(this, Integer.parseInt(match.group("row")), Integer.parseInt(match.group("col")));
            } else {
                throw new InvalidAction("Invalid output.");
            }
        } catch (TimeoutException | InvalidAction e) {
            throw e;
        } catch (Exception e) {
            throw new InvalidAction("Invalid output.");
        }
    }
}
