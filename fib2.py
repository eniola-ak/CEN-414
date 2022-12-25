howmany = int(input("How many terms? "))

n1, n2 = 0, 1
count = 0

if howmany <= 0:
    print("Please enter a positive integer")
elif howmany == 1:
    print(n1)
else:
    while count < howmany:
        print(n1)
        nth = n1 + n2
        n1 = n2
        n2 = nth
        count += 1
