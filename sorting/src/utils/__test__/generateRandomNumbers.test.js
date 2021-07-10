import randomNumbers from '../generateRandomNumbers';

test('Testing Random array generation', () => {
    const ARRAY_SIZE = 5;
    const randomArray = randomNumbers(ARRAY_SIZE);
    expect(randomArray.length).toBe(ARRAY_SIZE);
});
