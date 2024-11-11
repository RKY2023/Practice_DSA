#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int minimumSubarrayLength(vector<int>& nums, int k) {
        vector<int> count(32, 0);
        int start = 0, end = 0, minLength = INT_MAX;

        while (end < nums.size()) {
            updateBits(count, nums[end], 1);
            for (int i : count)
              cout << i << " ";
            cout << endl;
            while (start <= end && getVal(count) >= k) {
                minLength = min(minLength, end - start + 1);
                updateBits(count, nums[start], -1);
                start++;
            }
            end++;
        }

        return minLength == INT_MAX ? -1 : minLength;
    }

private:
    void updateBits(vector<int>& count, int num, int val) {
        for (int i = 0; i < 32; i++) {
            if ((num >> i) & 1) {
                count[i] += val;
            }
        }
    }

    int getVal(const vector<int>& count) {
        int ans = 0;
        for (int i = 0; i < 32; i++) {
            if (count[i] > 0) {
                ans |= (1 << i);
            }
        }
        return ans;
    }
};

int main() {
  Solution s1;
  // vector <int> nums({1,2});
  // int k = 0;
  vector <int> nums({2,1,8});
  int k = 10;
  int kk = s1.minimumSubarrayLength(nums, k);
  cout << kk ;
}