# absoluteValuesSumMinization

**Example**
```
Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.
```
## or the same problem can be interpreated as 

**median**

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
# applesDistribution

There are some apples. You are going to distribute them into gift boxes in such a way that boxes will contain equal number of apples. It's possible that some of the apples won't be used but there is a max limit on the number of apples that can be left out.

Assume that you have an infinite amount of gift boxes and that all the boxes have equal capacity.

Find the number of different apple distributions satisfying all of the above conditions.

**Example**
```
for apples = 7, boxCapacity = 4, maxResidue = 1 output should be 3
```
---
# arthimaticExpression 

Consider an arithmetic expression of the form A#B=C. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

**Example**
```
For A = 2, B = 3 and C = 5, we can replace # with a + to obtain 2 + 3 = 5, thus

arithmeticExpression(2, 3, 5) = true

```
---
# domainType

A domain registrar makes a lot of different top-level domains available to its customers. A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. To help the users choose from available domains, domain registrar is introducing a new feature that shows the type of the chosen top-level domain. You have to implement this feature.
To begin with, you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info respectively.
For the given list of domains return the list of their labels.

**Example**
```
- For domains = ["example.org", "example.com", "example.net", "example.info", "example.gov"], 
domainType(domains) = ["organization", "commercial", "network", "information", "government"].
```
---
# depositeProfit

You have deposited a specific amount into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

**Example**

For deposit = 100, rate = 20 and threshold = 170, the output should be
depositProfit(deposit, rate, threshold) = 3.

Each year the amount of money on your account increases by 20%. It means that throughout the years your balance would be:

- **year 0: 100;**
- **year 1: 120;**
- **year 2: 144;**
- **year 3: 172,8.**

Thus, it will take 3 years for your balance to pass the threshold, which is the answer.

---
# Different Characters in a String

Given a string, find the number of different characters in it.

**Example**

For s = "cabbage", the output should be differentCharacters(s) = 5.

---
# Angle between minute and hour hands of Analog clock

Give a time in 24 Hours format. Find the angle between minute and hour hands of the clock.

**Example**

For  time="01:12", the output should be convertTime(time) = 36.

---
# EncloseInBrackets

Given a string, enclose it in round brackets.

**Example**

For inputString = "abacaba", the output should be encloseInBrackets(inputString) = "(abacaba)".

---
# EvenDigitsOnly

Check if all digits of the given integer are even.

**Example**

- For input = 123, the output should be evenDigitsOnly(input) = false
- For input = 246, the output should be evenDigitsOnly(input) = true

---
# DigitsProduct

Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product.
If there is no such integer, return -1 instead.

**Example**

- For product = 12, the output should be digitsProduct(product) = 26
- For product = 19, the output should be digitsProduct(product) = -1

---
# Extract nth Element

Given array of integers, remove each kth element from it.

**Example**

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and n = 3, 

the output should be extractNth(inputArray, n) = [1, 2, 4, 5, 7, 8, 10].

---
# Extract Elements from Matrix

Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (0th index elements).

**Example**

For matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]] and column = 2, 

the output should be extractMatrixColumn(matrix, column) = [1, 0, 3].

---
# File Naming

You are given an array of desired filenames in the order of their creation. 
Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), 
where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

**Example**

For names = ["doc", "doc", "image", "doc(1)", "doc"], 

the output should be fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

---
# Uber Ride

Being a new Uber user, you have ₹20 off your first ride. You want to make the most out of it and drive in the fanciest car you can afford, without spending any out-of-pocket money. There are 5 options, from the least to the most expensive: "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".

You know the length *l* of your ride in kilometers and how much one kilometer costs for each car. Find the best car you can afford.

**Example**

For *l* = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], 

the output should be fancyRide(l, fares) = "UberXL".

---
# Uber Fair Estimation

Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. It works by passing approximated ride distance and ride time through this formula:

(Cost per minute) * (ride time) + (Cost per kilo meters) * (ride distance)

where Cost per minute and Cost per kilo meters depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per kilo meters for each car type, as well as ride distance and ride time, return the fare estimates for all car types. 

**Example**

For ride_time = 30, ride_distance = 7, cost_per_minute = [0.2, 0.35, 0.4, 0.45] and cost_per_km = [1.1, 1.8, 2.3, 3.5], 

the output should be fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_km) = [13.7, 23.1, 28.1, 38].

---
# Fermat's factorization method

Wiki Link [Fermat's factorization method](https://en.wikipedia.org/wiki/Fermat%27s_factorization_method)

**Example**

For n = 15, the output should be FermatFactorization(n) = [4, 1] => 15 = 4^2 - 1^2.

---
# Closed Sum Pair

Given an array of integers numbers, we'd like to find the closest pair of elements that add up to sum. Return the distance between the closest pair (absolute difference between the two indices). If there isn't a pair that adds up to sum, return -1.

**Example**
- For numbers = [1, 0, 2, 4, 3, 0] and sum = 5 the output should be findClosestPair(numbers, sum) = 2.

- For numbers = [2, 3, 7] and sum = 8 the output should be findClosestPair(numbers, sum) = -1. 

---
# Domain Name of a given Email

An email address such as "John.Smith@example.com" is made up of a local part "John.Smith", an "@" symbol, then a domain part "example.com".

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters.

Given a valid email address, find its domain part.

**Example**

- For address = "prettyandsimple@example.com", the output should be findEmailDomain(address) = "example.com";

- For address = "<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org", the output should be findEmailDomain(address) = "example.org".

---
# firstDigit

Find the leftmost digit that occurs in a given string.

**Example**

- For inputString = "var_1__Int", the output should be firstDigit(inputString) = '1';

- For inputString = "q2q-q", the output should be firstDigit(inputString) = '2';

- For inputString = "0ss", the output should be firstDigit(inputString) = '0'.

---
# Closest Duplicate

Given an array that contains, find the closest duplicate for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicate, return for which the second occurrence has a smaller index than the second occurrence. If there are no such elements, return `undefined`.

**Example**


- For inputArray = [2, 1, 3, 5, 3, 2], the output should be closestDuplicate(inputArray) = 3.

- For inputArray = [2, 4, 3, 5, 1], the output should be closestDuplicate(inputArray) = undefined.

---
# firstNotRepeatingCharacter

Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

**Example**

- For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.

- For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.

---
# Flatten Array

Flatten a nested array. You must account for varying levels of nesting.

**Example**
- flattenArray([[["a"]], [["b"]]]) should return ["a", "b"]
- flattenArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]

---
# Growing Plant

Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

**Example**

For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be growingPlant(upSpeed, downSpeed, desiredHeight) = 10.

---
# Sum of Houses

A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.

**Example**

For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be houseNumbersSum(inputArray) = 11.

---
# Root Sum

For a given number reduce the given number to single digit by adding each numbers

**Example**

For inputNumber = 28081994, the output should be rootNumberOfString(inputNumber) = 5.

---
# Valid Time

Check if the given string is a correct time representation of the 24-hour  clock.

**Example**

- time = "13:58", the output should be validTime(time) = true;

- time = "25:51", the output should be validTime(time) = false;

- time = "02:76", the output should be validTime(time) = false.

---
# Root Product

For a given number reduce the given number to single digit by adding each numbers

**Example**

For inputNumber = 222, the output should be rootProduct(inputNumber) = 5.

---
