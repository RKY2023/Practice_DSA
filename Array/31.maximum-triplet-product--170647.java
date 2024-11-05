// https://www.geeksforgeeks.org/problems/maximum-triplet-product--170647/1

class Solution {
  Long maxTripletProduct(Long arr[], int n)
  {
      // Complete the function
      long max1=Integer.MIN_VALUE;
      long max2=Integer.MIN_VALUE;
      long max3=Integer.MIN_VALUE;
      long min1=Integer.MAX_VALUE;
      long min2=Integer.MAX_VALUE;
      for(int i=0; i<n; i++){
          if(arr[i]>max1){
              max3=max2;
              max2=max1;
              max1=arr[i];
          }
          else if(arr[i]>max2){
              max3=max2;
              max2=arr[i];
          }
          else if(arr[i]>max3){
              max3=arr[i];
          }
          if(arr[i]<min1){
              min2=min1;
              min1=arr[i];
          
          }
          else if(arr[i]<min2){
              min2=arr[i];
          }
      }
     
      return Math.max(max1*max2*max3, max1*min1*min2);
  }
}
