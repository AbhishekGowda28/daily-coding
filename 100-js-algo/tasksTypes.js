/* eslint-disable max-params */
// @ts-check

/**
 * @param {number} deadline
 * @param {number} day
 * @param {{ today: number[]; later: number[]; upcomming: number[]; }} taskArr
 */
function deadLineUpdate(deadline, day, taskArr) {
    if (deadline <= day) {
        taskArr.today.push(deadline);
    } else if (deadline >= day + 1 && deadline <= day + 7) {
        taskArr.later.push(deadline);
    } else {
        taskArr.upcomming.push(deadline);
    }
}

/**
 * @param {number[]} deadlines
 * @param {number} day
 */
function tasksTypes(deadlines, day) {
    const taskArr = {
        today: [],
        later: [],
        upcomming: []
    };
    deadlines.forEach(deadline => deadLineUpdate(deadline, day, taskArr));

    return Object.values(taskArr).map(e => e.length);
}

module.exports = tasksTypes;
