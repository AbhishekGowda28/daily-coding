export default function () {

    const randomArray = [], ARRAY_SIZE = 100;

    for (let count = 0; count < ARRAY_SIZE; count++) {
        const value = Number((Math.random() * ARRAY_SIZE).toFixed(0));
        randomArray.push(value);
    }
    return randomArray;
}