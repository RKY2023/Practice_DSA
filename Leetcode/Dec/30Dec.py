def countGoodStrings(low: int, high: int, numZeroes: int, numOnes: int) -> int:
    MOD = 10**9 + 7
    dp = [0] * (high + 1)
    dp[0] = 1  # There's one way to construct a string of length 0 (the empty string)
    
    for length in range(1, high + 1):
        if length >= numZeroes:
            dp[length] = (dp[length] + dp[length - numZeroes]) % MOD
        if length >= numOnes:
            dp[length] = (dp[length] + dp[length - numOnes]) % MOD
            
    print(dp)
    result = 0
    for length in range(low, high + 1):
        result = (result + dp[length]) % MOD
        print(result)
        
    return result

print(countGoodStrings(2,3,1,2))