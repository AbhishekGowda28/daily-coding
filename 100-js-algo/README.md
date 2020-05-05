# absoluteValuesSumMinization

**Example**
```
Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.
```
## or the same problem can be interpreated as 

median

Given an array of integers a, find the median of the array.

**Example**
```
For a = [2, 4, 7], the output should be
median(a) = 4.

For a = [2, 4, 7, 6], the output should be
median(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
median(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be
median(a) = 7.
```
---
# add
1. Write a function that returns the sum of two numbers.
2. Write a function that returns the sum of all numbers regardless of number of params.

**Example**
```
For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.
```
---
# addBorder
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**
```
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
```
---
# addTwoDigits

You are given a two-digit integer n. Return the sum of its digits.
---
# addWithoutCarry

A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. 
But he always forgets about the important part -- carrying.

Given two integers, find the result which the little boy will get.

Note: the boy used this site as the source of knowledge, feel free to check it out too if you are not familiar with column addition.

**Example**

```
For `param1 = 456` and `param2 = 1734`, the output should be `1180`.

         456
        1734
      + ____
        1180

The little boy goes from right to left:

`6 + 4 = 10` but the little boy forgets about 1 and just writes down 0 in the last column 
5 + 3 = 8 4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7. 
There is no digit in the first number corresponding to the leading digit of the second one, 
so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

[input] integer param1

A non-negative integer. [input] integer param2

A non-negative integer. [output] integer
```

---
# adjacentProduct

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

**Example**
```
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
 adjacentProduct(inputArray) = 21.
 7 and 3 produce the largest product.
```
---
# allLongestStrings

Given an array of strings, return another array containing all of its longest strings.

**Example**
```
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be 
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
```
---
# almostIncreasingSequence
```
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly 
increasing sequence by removing no more than one element from the array.

```
On more details on [Strictly increasing sequence](https://math.stackexchange.com/questions/808338/what-is-a-strictly-increasing-sequence-in-discrete-math)

**Example**
```
- For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
```
---
# alphabeticShift

Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

**Example**
```
For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbAz".
```
---
# alternatingSums

Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight of team 1, 
and the second element is the total weight of team 2 after the division is complete.

**Example**
```
For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].
```
---
# angleType

Given the angle measure, find its type.

**Example**

```
for measure = 125 output should be "obtuse"
angleType(angle) = "obtuse"

- integer not larger than 180

the type of the angle (i.e., "acute", "right", "obtuse" or "straight")
```
---
# areEquallyStrong

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), 
and so are their weakest arms.

Given you and your friend's arms' lifting capabilities find out if you two are equally strong.

**Example**
```
For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.
```
---
# areSimilar

Two arrays are called similar if one can be obtained from another by swapping at most e pair of elements in one of the arrays.

Given two arrays, check whether they are similar.

**Example**
```
For A = [1, 2, 3] and B = [1, 2, 3], the output should be
areSimilar(A, B) = true.

The arrays are equal, no need to swap any elements.
For A = [1, 2, 3] and B = [2, 1, 3], the output should be
areSimilar(A, B) = true.

We can obtain B from A by swapping 2 and 1 in B.
For A = [1, 2, 2] and B = [2, 1, 1], the output should be
areSimilar(A, B) = false.
Any swap of any two elements either in A or in B won't make A and B equal.
```
---
# arrayChange

You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**
```
For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.
```
---
# arrayConversion

Given an array of 2*k integers (for some integer k), perform the following operation untill the array contains only one element: 
 - On the 1st, 3rd, 5th etc iterations replace each pair of consecutive elements with their sum.
 - On the 2nd, 4th, 6th etc iterations replace each pair of consecutive elements with their procudct. 
 
 After the alogrithm has finished, there will be a single element left in the array. Return that element

 **Example**
```
 For inputArray = [1,2,3,4,5,6,7,8], the output should be arrayConversion(inputArray) = 186;

 1st iteration -> [1,2,3,4,5,6,7,8] => [3,7,11,15]
 2nd iteration -> [3,7,11,15] => [21,165]
 3rd iteration -> [21,165] => 186
```
 ---
# arrayMaxConsecutiveSum

Given array of integers, find the maximal possible sum of some of its k consecutive elements.

**Example**
```
For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be arrayMaxConsecutiveSum(inputArray, k) = 8.

All possible sums of 2 consecutive elements are:
2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
```
---
# arrayMaximalAdjacentDifference

Given an array of integers, find the maximal absolute difference between any two of ts adjacent elements.

**Example**
```
 For inputArray = [2, 4, 1, 0], the output should be
 arrayMaximalAdjacentDifference(inputArray) = 3.
```
---
# arrayReplace

Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

**Example**
```
For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
```
---
# avoidObstacles

You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.
Find the minimal length of the jump enough to avoid all the obstacles.

**Example**
```
For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

Check out the image for better understanding:
```
![Image](https://codefightsuserpics.s3.amazonaws.com/tasks/avoidObstacles/img/example.png?_tm=1490625560816 "Avoid Obstacles")
---
# bishopAndPawn

Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


**Example**
```
For bishop = "a1" and pawn = "c3", the output should be bishopAndPawn(bishop, pawn) = true.

For bishop = "h1" and pawn = "h3", the output should be bishopAndPawn(bishop, pawn) = false.
```
---
# boxBlur

Last night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin your reputation, so you want to apply box blur algorithm to the photo to hide its content.
The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.
As pixel's value is an integer, all fractions should be rounded down.

**Example**
```
For image = [[1, 1, 1], 
            [1, 7, 1], 
            [1, 1, 1]]
the output should be boxBlur(image) = [[1]].
In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as 
(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = rounded down = 1.
```
---
# buildPalindrome

Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

**Example**
```
For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".
```
---
# candies

n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.

**Example**
```
-   For n = 3 and m = 10, the output should be candies(n, m) = 9.

    Each child will eat 3 pieces. So the answer is 9.
 
    The total number of pieces of candy the children will eat provided they eat as much as they can and all 
    children eat the same amount.
```
---
# centuryFromYear

Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

**Example**
```
- For year = 1905, the output should be centuryFromYear(year) = 20;
- For year = 1700, the output should be centuryFromYear(year) = 17.
```
---
# checkPalindrome

Given the string, check if it is a palindrome.

**Example**
```
- For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
- For inputString = "abac", the output should be checkPalindrome(inputString) = false;
- For inputString = "a", the output should be checkPalindrome(inputString) = true.
```
---

# chessBoardCellColor

Given two cells on the standard chess board, determine whether they have the same color or not.

**Example**
```
For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.
For cell1 = "A1" and cell2 = "H3", the output should be
chessBoardCellColor(cell1, cell2) = false.
```
---
# chessKnight

Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. 
The complete move therefore looks like the letter L. 
Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

**Example**
```
- For cell = "a1", the output should be chessKnight(cell) = 2.
- For cell = "c2", the output should be chessKnight(cell) = 6.
```
---
# chunkyMonkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

**Example**
```
-   chunkyMonkey(["a", "b", "c", "d"], 2) the output should be [["a", "b"], ["c", "d"]].
-   chunkyMonkey([0, 1, 2, 3, 4, 5], 4) the output should be [[0, 1, 2, 3], [4, 5]].
```
---
# circleOfNumbers

Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal 

(note that 0 and n - 1 are neighbouring, too).
Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

**Example**
```
For n = 10 and firstNumber = 2, the output should be
circleOfNumbers(n, firstNumber) = 7.
```
---
# applesInbox

We have k square apple boxes full of apples. If a box has a side length (aka size) of m then it contains m x m apples. You notice two interesting properties about the boxes:

The boxes form a full set, i.e. the smallest box has size 1, the next one has size 2,..., all the way up to size k. Boxes that have an odd size contain only yellow apples. Boxes that have an even size only contain red apples. Your task is to calculate the difference between the number of red apples and the number of yellow apples.

**Example**
```
For k = 5, there will be 1 + 3 _ 3 + 5 _ 5 = 35 yellow apples and 2 _ 2 + 4 _ 4 = 20 red apples, thus the answer would be

20 - 35 = -15.
```
---
