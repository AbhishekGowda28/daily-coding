export default function (ARRAY_SIZE, allow_duplicates) {
    const randomArray = [];
    let count = 0;
    if (allow_duplicates) {
        while (count < ARRAY_SIZE) {
            const value = Number((Math.random() * ARRAY_SIZE).toFixed(0));
            randomArray.push(value);
            count++;
        }
    } else {
        while (count < ARRAY_SIZE) {
            const value = Number((Math.random() * ARRAY_SIZE).toFixed(0));
            while (randomArray.includes(value) === false) {
                randomArray.push(value);
                count++;
            }
        }
    }

    return randomArray;
}