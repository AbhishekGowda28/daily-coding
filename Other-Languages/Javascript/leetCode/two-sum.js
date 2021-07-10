/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (41.33%)
 * Total Accepted:    1.5M
 * Total Submissions: 3.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let targetIndices = [];
    targetIndices = getIndices(nums, target, targetIndices);
    if (targetIndices.length === 0) {
        return;
    }
    return targetIndices;
};

function getIndices(nums, target, targetIndices) {
    nums.forEach((number, index, array) => {
        let complement = target - number;
        let indexOfComplement = array.indexOf(complement);
        if (index !== indexOfComplement) {
            if (indexOfComplement !== -1) {
                if (targetIndices.indexOf(index) === -1) {
                    if (targetIndices.length < 2) {
                        targetIndices.push(index, indexOfComplement);
                    }
                }
            }
        }
    });
    return targetIndices;
}

