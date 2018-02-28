import com.codingame.gameengine.runner.GameRunner;

public class Main {
    public static void main(String[] args) {
        
        GameRunner gameRunner = new GameRunner();
        gameRunner.addAgent(Player1.class);
        gameRunner.addAgent(Player2.class);
        
        // gameRunner.addAgent("python3 /home/user/player.py");
        
        gameRunner.start();
    }
}
