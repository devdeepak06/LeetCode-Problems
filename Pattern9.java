public class Pattern9 {
  public static void printTriangle(int N) {
    for (int i = 0; i < N; i++) {
      // Printing leading spaces
      for (int j = 0; j < i; j++) {
        System.out.print(" ");
      }
      // Printing stars
      for (int j = 0; j < 2 * (N - i) - 1; j++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void revertprintTriangle(int N) {
    for (int i = 0; i < N; i++) {
      // Printing leading spaces
      for (int j = 0; j < N - i - 1; j++) {
        System.out.print(" ");
      }
      // Printing stars
      for (int j = 0; j < 2 * i + 1; j++) {
        System.out.print("*");
      }
      System.out.println();
    }
  }

  public static void main(String[] args) {
    int N = 5;
    revertprintTriangle(N);
    printTriangle(N);
  }
}
