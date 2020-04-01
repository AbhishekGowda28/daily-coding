# Problem 1

absoluteValuesSumMinization

**Example**

Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

## or the same problem can be interpreated as 

median

Given an array of integers a, find the median of the array.

**Example**

For a = [2, 4, 7], the output should be
median(a) = 4.

For a = [2, 4, 7, 6], the output should be
median(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
median(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be
median(a) = 7.

---
# Problem 2
1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of number of params.

**Example**

For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.

---
# Problem 3
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**

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
# Problem 4

You are given a two-digit integer n. Return the sum of its digits.

---
# Problem 5

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 adjacentElementsProduct(inputArray) = 21.
 7 and 3 produce the largest product.

---
# Problem 6

Given an array of strings, return another array containing all of its longest strings.

**Example**

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

---
# Problem 7

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
# Problem 8

Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

**Example**

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbAz".

---
# Problem 9

Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight of team 1, 
and the second element is the total weight of team 2 after the division is complete.

**Example**

For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].

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
# Problem 11

Two arrays are called similar if one can be obtained from another by swapping at most e pair of elements in one of the arrays.

Given two arrays, check whether they are similar.

**Example**

For A = [1, 2, 3] and B = [1, 2, 3], the output should be
areSimilar(A, B) = true.

The arrays are equal, no need to swap any elements.
For A = [1, 2, 3] and B = [2, 1, 3], the output should be
areSimilar(A, B) = true.

We can obtain B from A by swapping 2 and 1 in B.
For A = [1, 2, 2] and B = [2, 1, 1], the output should be
areSimilar(A, B) = false.
Any swap of any two elements either in A or in B won't make A and B equal.

---
# Problem 12

You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

---
# Problem 13

Given an array of 2*k integers (for some integer k), perform the following operation untill the array contains only one element: 
 - On the 1st, 3rd, 5th etc iterations replace each pair of consecutive elements with their sum.
 - On the 2nd, 4th, 6th etc iterations replace each pair of consecutive elements with their procudct. 
 
 After the alogrithm has finished, there will be a single element left in the array. Return that element

 **Example**

 For inputArray = [1,2,3,4,5,6,7,8], the output should be arrayConversion(inputArray) = 186;

 1st iteration -> [1,2,3,4,5,6,7,8] => [3,7,11,15]
 2nd iteration -> [3,7,11,15] => [21,165]
 3rd iteration -> [21,165] => 186

 ---
# Example 14

Given array of integers, find the maximal possible sum of some of its k consecutive elements.

**Example**

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8.

All possible sums of 2 consecutive elements are:
2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.

---
# Problem 15

Given an array of integers, find the maximal absolute difference between any two of ts adjacent elements.

**Example**

 For inputArray = [2, 4, 1, 0], the output should be
 arrayMaximalAdjacentDifference(inputArray) = 3.

---
# Problem 16

Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

**Example**

For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

---
# Problem 17

You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.
Find the minimal length of the jump enough to avoid all the obstacles.

**Example**

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.
Check out the image below for better understanding:
![Image](https://codefightsuserpics.s3.amazonaws.com/tasks/avoidObstacles/img/example.png?_tm=1490625560816 "Avoid Obstacles")

---
# Problem 18

Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


**Example**

For bishop = "a1" and pawn = "c3", the output should be bishopAndPawn(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be bishopAndPawn(bishop, pawn) = false.

---
