// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
  let newList = [];
  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      newList.push(list1[i]);
      i++;
    } else {
      newList.push(list2[j]);
      j++;
    }
  }

  while (i < list1.length) {
    newList.push(list1[i]);
    i++;
  }

  while (j < list2.length) {
    newList.push(list2[j]);
    j++;
  }

  return newList;
};

// Example Usage
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], [0]));
console.log(mergeTwoLists([1, 2], [3, 4]));
