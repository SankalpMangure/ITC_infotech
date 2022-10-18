// 6. Find the longest common prefix string from an array of string

function longestCommonPrefix(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);

    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res = longestCommonPrefix(["flowing", "flown", "flew"]);
console.log(res);
let res1 = longestCommonPrefix(["apple", "night", "cat"]);
console.log(res1);