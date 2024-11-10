#include <bitset>
#include <iostream>
#include <limits>

using namespace std;

class Solution {
public:
    long long minEnd(int n, int x) {
        bitset<64> X(x), N(n-1), ans=0;
        cout << X << endl;
        cout << N << endl;
        cout << ans << endl;
        for(int i=0, j=0; i<56; i++){
            if(i < 5) {
              cout << i << '-' << j << "_" << X[i] << '-' << N[j]  << endl;
            }
            ans[i]=(X[i])?1:N[j++];
            
            // cout << ans[i];
        }
        // ans[56] =1;
        cout << ans;
        return ans.to_ullong();
    }
};

int main () {
  Solution sol1;
  int n = 3;
  int x = 4;
  cout << sol1.minEnd(n, x);
}