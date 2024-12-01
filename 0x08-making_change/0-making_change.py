#!/usr/bin/python3
""" Making Change """
import sys

def makeChange(coins, total):
    if total <= 0:
        return 0
    
    # Create a list to store the minimum coins required for each amount up to total
    dp = [float('inf')] * (total + 1)
    dp[0] = 0  # Base case: 0 coins are needed to make a total of 0
    
    for coin in coins:
        for amount in range(coin, total + 1):
            dp[amount] = min(dp[amount], dp[amount - coin] + 1)
    
    return dp[total] if dp[total] != float('inf') else -1
