'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    console.log("end");
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(starting_postion_of_house, ending_position_of_house, apple_tree_position, orange_tree_position, number_of_apples, number_of_oranges) {
    const actual_distance_of_apples = distanceOfFruit(number_of_apples, apple_tree_position);
    const actual_distance_of_oranges = distanceOfFruit(number_of_oranges, orange_tree_position);
    const apples_count = countOfFruits(actual_distance_of_apples, starting_postion_of_house, ending_position_of_house);
    const oranges_count = countOfFruits(actual_distance_of_oranges, starting_postion_of_house, ending_position_of_house);
    return [apples_count, oranges_count];
}

function distanceOfFruit(number_of_fruits, tree_distance) {
    return number_of_fruits.map(fruit => {
        return (tree_distance + fruit)
    });
}

function countOfFruits(acutal_distance, start_position, end_position) {
    let fruit_count = 0;
    acutal_distance.forEach(distance => {
        if (distance >= start_position && distance <= end_position) {
            fruit_count++;
        }
    });
    return fruit_count;
}

function main() {
    const st = readLine().split(' ');

    const starting_point_of_house = parseInt(st[0], 10);

    const ending_point_of_house = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const apple_tree_position = parseInt(ab[0], 10);

    const orange_tree_position = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const number_of_apples = parseInt(mn[0], 10);

    const number_of_oranges = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(starting_point_of_house, ending_point_of_house, apple_tree_position, orange_tree_position, apples, oranges).forEach(result => {
        console.log(result);
    });

}
