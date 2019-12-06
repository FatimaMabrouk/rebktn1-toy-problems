function characterFrequency(string) {
    const chars = countChars(string);
    return sortChars(chars);
}
function sortChars(object) {
    const result = [];
    for (let key in object) {
        result.push([key, object[key]]);
    }
    result.sort((a, b) => {
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });
    return result;
}
function countChars(string) {
    const map = {};
    for (let char of string) {
        map[char] = map[char] + 1 || 1;
    }
    return map;
}
console.log(characterFrequency("aaabbc")); // [["a", 3], ["b", 2], ["c", 1]]
console.log(characterFrequency("mississippi")); // [["i", 4], ["s", 4], ["p", 2], ["m", 1]]
console.log(characterFrequency("")) // []