class Solution:
    def maxTripletProduct (self, arr,  n): 
        min1 = min2 = float('inf')
        max1 = max2 = max3 = -float('inf')
        
        for num in arr:
            if num <= min2:
                if num <= min1:
                    min2 = min1
                    min1 = num
                else:
                    min2 = num
            if num >= max3:
                if num >= max2:
                    if num >= max1:
                        max2, max3 = max1, max2
                        max1 = num
                    else:
                        max3 = max2
                        max2 = num
                else:
                    max3 = num

        return max(max1 * max2 * max3, min1 * min2 * max1)