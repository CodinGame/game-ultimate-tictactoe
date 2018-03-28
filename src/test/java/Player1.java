import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Player1 {
    static class Action {
        int row, col;
        public Action(int row, int col) {
            this.row = row;
            this.col = col;
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Random random = new Random(0);
        String[] texts = new String[] {"Im the king", "3 in your face", "UTTT is fun to play everyday", "GG", "Nice move"};

        while (true) {
            int opponentRow = in.nextInt();
            int opponentCol = in.nextInt();
            int validActionCount = in.nextInt();
            List<Action> actions = new ArrayList<>(validActionCount);

            for (int i = 0; i < validActionCount; i++) {
                int row = in.nextInt();
                int col = in.nextInt();
                
                actions.add(new Action(row, col));
            }
            
            Action a = actions.get(random.nextInt(actions.size()));
           
            String msg = texts[random.nextInt(5)];
            if (random.nextInt(5) != 0)
            	System.out.println(String.format("%d %d %s", a.row, a.col, msg));
            else
            	System.out.println(String.format("%d %d", a.row, a.col));
        }
    }
}
