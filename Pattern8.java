// import java.util.Scanner;
public class Pattern8 {

  public static void printTriangle(int N) {
    for (int i = 0; i < N; i++) {
      for (int j = 0; j < i; j++) {
        System.out.print(" ");
      }

      // For printing the stars in each row
      for (int j = 0; j < 2 * N - (2 * i + 1); j++) {

        System.out.print("*");
      }

      // For printing the spaces after the stars in each row
      for (int j = 0; j < i; j++) {
        System.out.print(" ");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    // Scanner sc = new Scanner(System.in);
    // int n = sc.nextInt();

    printTriangle(5);

  }
}
