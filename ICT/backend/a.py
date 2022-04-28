n = int(input())
a = [int(i) for i in input().split()]

ans = 1e18 * 9

for i in range(n):
    j = i - 1
    while j >= 0:
        