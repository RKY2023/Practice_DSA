import java.util.Arrays;

public class leetcode_30Dec {
  double counGoodString(int low, int high, int zeros, int ones){
    double m = 10e9 +7;
    double[] binaryStrCount = new double[high+1];
    Arrays.fill(binaryStrCount, 0);
    for(int i=1; i <= high; i++){
      if(i >=  zeros) {
        binaryStrCount[i] = (binaryStrCount[i] + binaryStrCount[i - zeros]) % m;
      }
      if(i >=  ones) {
        binaryStrCount[i] = (binaryStrCount[i] + binaryStrCount[i - ones]) % m;
      }
    }
    double result = 0;
    for(int i = low; i<=high; i++){
      result += binaryStrCount[i];
    }
    return result;
  }
}

