package arrays;
//Approach 1: Brute Force
// The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.
// Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n) time.
// Therefore, the time complexity is O(n^2).
// Space complexity : O(1).
// Difficulty: Easy
// Time Complexity: O(n^2)
// Space Complexity: O(1)


public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        int i, j;
        for (i = 0; i < nums.length; i++) {
            for (j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    result[0]=i;
                    result[1]=j;
                    return result;
                }
            }
        }
        return result;
    }
}
