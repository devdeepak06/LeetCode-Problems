// Problem: "Search Insert Position"
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were
// inserted in order. You may assume no duplicates in the array.
// Example 1: Input: [1,3,5,6], 5 Output: 2
// Example 2: Input: [1,3,5,6], 2 Output: 1
// Example 3: Input: [1,3,5,6], 7 Output: 4
// Example 4: Input: [1,3,5,6], 0 Output: 0
// Solution: Brute Force
// Difficulty: Easy
// Time Complexity: O(n)
// Space Complexity: O(1)
// Approach 1: Brute Force
// The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.
// Time complexity : O(n^2). For each element, we try to find its complement by looping through the rest of array which takes O(n) time.
// Therefore, the time complexity is O(n^2).
// Space complexity : O(1).
// Difficulty: Easy
// Time Complexity: O(n^2)
// Space Complexity: O(1)
//
//

package arrays;

public class SearchInsertPosition {
    public int searchInsert(int[] nums, int target) {
        int i;
        for (i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                return i;
            }
        }
        return i; // if target is greater than all elements in nums
    }
}
