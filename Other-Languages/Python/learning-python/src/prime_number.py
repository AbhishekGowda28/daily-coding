def prime_numbers(lower, higher):
       pass

test_case = int(input("Enter number of test case"))
test_case_counter = 0
while(test_case_counter<test_case):
       numbers = input("Enter the range ")
       numbers = numbers.split(" ")
       lower = int(numbers[0])
       higher = int(numbers[1])
       print("Numbers", lower, higher)
       primes = []
       prime_numbers(lower, higher)
       print(primes)
       test_case_counter+=1