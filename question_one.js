// 1.Given an array nums of size n, return the majority element.

function checkMajority(arr, n) {
    let maxCount = 0;
    let position = -1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }

        if (count > maxCount) {
            maxCount = count;
            position = i;
        }
    }

    maxCount > n / 2 ? console.log(arr[position]) : console.log("No Majority Element");
}

let arr = [3, 2, 3];
let n = arr.length;

checkMajority(arr, n);