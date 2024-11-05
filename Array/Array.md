solution "https://www.geeksforgeeks.org/problems/container-with-most-water0535/1?page=4&difficulty%5B%5D=1&category%5B%5D=Arrays&sortBy=submissions"
The "Container With Most Water" problem on GeeksforGeeks asks you to find two lines that together with the x-axis form a container, such that the container contains the most water. Here's a simple approach to solve this problem:

### Approach
**Initialize two pointers:** Start with one pointer at the beginning of the array and the other at the end.

**Calculate the area:** The area is determined by the distance between the pointers (width) and the minimum height of the two lines.

**Move the pointers:** Move the pointer pointing to the shorter line towards the other pointer.

**Update the maximum area:** Keep track of the maximum area encountered so far.