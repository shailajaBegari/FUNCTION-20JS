user=int(input("enter number:"))
l=[]
i=0
maxi=0
mini=0
l1=[]
l2=[]
while i<user:
    score=int(input("enter number:"))
    l.append(score)
    print(l)
    if maxi==0:
        maxi=l[i]
    elif l[i]>maxi:
        maxi=l[i]
    if mini==0:
        mini=l[i]
    elif l[i]<mini:
        mini=l[i]
    i=i+1
    l1.append(maxi)
    l2.append(mini)
print(l1)
print(l2)
M=max(l1)
n=min(l2)
print("maximunvalue:",M)
print("minimumvalue:",n)
maxcount=[]
minicount=[]
for j in l1:
    if M==j:
        maxcount.append(1)
    else:
        maxcount.append(0)
print("maxicount:",maxcount)
for k in l2:
    if n==k:
        minicount.append(1)
    else:
        minicount.append(0)
print("minicount",minicount)

