m=int(input())
n=int(input())
l1=[]
l2=[]

for i in range(m):
    a=int(input())
    l1.append(a)
    l1.sort()
for i in range(n):
    b=int(input())
    l2.append(b)
    l2.sort()    

combine = l1+l2
b=len(combine)
half = int(b/2)
if(m==0 & n==0):
    median = 0
elif(b%2==0):
    median = (combine[half] + combine[half+1])/2
elif(b%2!=0):
    median = combine[half]
print(median)    