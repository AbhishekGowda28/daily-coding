# Problem - 1:

absoluteValuesSumMinization

Example: 
Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

## or the same problem can be interpreated as 

median

Given an array of integers a, find the median of the array.

Example :
For a = [2, 4, 7], the output should be
median(a) = 4.

For a = [2, 4, 7, 6], the output should be
median(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
median(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be
median(a) = 7.

---
# Problem - 2:
1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of number of params.

Example :
For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.

---
### Problem - 3
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example :
For

    picture =   [
                    "abc",
                    "ded"
                ]
the output should be

    addBorder(picture) =    [
                                "*****",
                                "*abc*",
                                "*ded*",
                                "*****"
                            ]

---
# Problem - 4

You are given a two-digit integer n. Return the sum of its digits.

---
# Problem - 5

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example: 
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 adjacentElementsProduct(inputArray) = 21.
 7 and 3 produce the largest product.

---
# Problem - 6

Given an array of strings, return another array containing all of its longest strings.

Example :
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

---
# Problem - 7

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

On more details on [Strictly increasing sequence](https://math.stackexchange.com/questions/808338/what-is-a-strictly-increasing-sequence-in-discrete-math)

**Example**

- For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

---
# Problem - 8

Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

**Example**

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbAz".

---
# Problem 9

Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight of team 1, 
and the second element is the total weight of team 2 after the division is complete.

**Example**

For a = [50, 60, 60, 45, 70], the output should be
alternatingSums(a) = [180, 105].

---
# Problem 10

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), 
and so are their weakest arms.

Given you and your friend's arms' lifting capabilities find out if you two are equally strong.

**Example**

For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

---
