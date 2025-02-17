// import java.util.Scanner;

public class Patterns {
  public static void printTriangle(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        System.out.print(i - j + 1 + " ");
      }
      System.out.println();
    }
  }
  
  // public static void printTriangle(int n) {
  //   for (int i = 1; i <= n; i++) {
  //     for (int j = 1; j <= i; j++) {
  //       System.out.print(j+ " ");
  //     }
  //     System.out.println();
  //   }
  // }

  public static void main(String[] args) {
    // Scanner sc = new Scanner(System.in);
    // int n = sc.nextInt();

    printTriangle(5);

  }
}
