package arrays;

public class RemoveElement {
    public int removeElement(int[] nums, int val) {
        int i = 0;
        for (int j=0; j<nums.length; j++) {
            if (nums[j] != val) {    //!= is used for comparing values of primitive data types
                nums[i]=nums[j];
                i++;
            }
        }
        return i;
    }
}
