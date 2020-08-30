const data = [
    {
        "id": 998,
        "client": { "id": "AF01072", "name": "Vivek", "lastName": "Joshi", "phone": 123 },
        "membership": { "type": "Semi-Annually", "price": 18000 },
        "start_date": "2019-11-19", "end_date": "2020-05-16", "payment": 12000, "balance": 0
    },

    {
        "id": 1004,
        "client": { "id": "AF01072", "name": "Vivek", "lastName": "Joshi", "phone": 123 },
        "membership": { "type": "Annually", "price": 30000 },
        "start_date": "2020-08-27", "end_date": "2021-08-27", "payment": 30000, "balance": 5000,
    }
];

// Using Array
const excludeClientIdsFromData = [];
const filterUserDataUsingArray = (userData) => {
    if (excludeClientIdsFromData.includes(userData.client.id) === false) {
        excludeClientIdsFromData.push(userData.client.id);
        return true;
    }
};
const filterdDataUsingArray = data.filter(filterUserDataUsingArray);

// Using Set
const excludeSet = new Set();
const filterUserDataUsingSet = (userData) => {
    if (excludeSet.has(userData.client.id) === false) {
        excludeSet.add(userData.client.id);
        return true;
    }
};
const filterDataUsingSet = data.filter(filterUserDataUsingSet);

console.log(filterdDataUsingArray);
console.log(filterDataUsingSet);
