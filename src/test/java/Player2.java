import java.util.Random;
import java.util.Scanner;

public class Player2 {
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

        while (true) {
            int opponentRow = in.nextInt();
            int opponentCol = in.nextInt();
            int validActionCount = in.nextInt();

            int row = 0;
            int col = 0;
            for (int i = 0; i < validActionCount; i++) {
                row = in.nextInt();
                col = in.nextInt();
            }
            
            System.out.println(String.format("%d %d", row, col));
        }
    }
}
