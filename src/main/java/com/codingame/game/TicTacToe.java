package com.codingame.game;

import java.util.ArrayList;
import java.util.List;

public class TicTacToe {
    private int[][] grid = new int[3][3];
    protected int winner = 0;

    public List<Action> getValidActions() {
        List<Action> validActions = new ArrayList<>();
        if (winner == 0) {
            for (int x = 0; x < 3; x++) {
                for (int y = 0; y < 3; y++) {
                    if (grid[x][y] == 0) {
                        validActions.add(new Action(null, x, y));
                    }
                }
            }
        }
        return validActions;
    }

    public int play(Action action) throws InvalidAction {
        if (action.row < 0 || action.row >= 3 || action.col < 0 || action.col >= 3 || grid[action.row][action.col] != 0) {
            throw new InvalidAction("Invalid move!");
        }


        // update grid
        grid[action.row][action.col] = action.player.getIndex() + 1;

        winner = checkWinner();
        return winner;
    }

    private int checkWinner() {
        for (int i = 0; i < 3; i++) {
            // check rows
            if (grid[i][0] > 0 && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
                return grid[i][0];
            }

            // check cols
            if (grid[0][i] > 0 && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) {
                return grid[0][i];
            }
        }

        // check diags
        if (grid[0][0] > 0 && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
            return grid[0][0];
        }
        if (grid[2][0] > 0 && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2]) {
            return grid[2][0];
        }

        return 0;
    }
}