function twoSum(arr, target) {

    const map = new Map();

    for (let i = 0; i < arr.length; i++) {

        const complement = target - arr[i];
        if (map.has(complement)) {
            return ([map.get(complement), i])
        }
        map.set(arr[i], i);
    }

    throw new Error("No Complement found");
}

const arr = [2, 7, 9, 11];
const target = 9;

try {
    const result = twoSum(arr, target); //Time complexity O(n) due to use of Map
    console.log(result);
} catch (err) {
    console.log(err.message);

}
