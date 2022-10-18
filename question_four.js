function check_issubsequence(str1, str2) {
    str1 = str1.split('');
    let lnt = str1.length;
    str2 = str2.split('');
    let cnt = 0;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                cnt++;
            }
        }
    }

    cnt >= lnt ? console.log(true) : console.log(false)
}

let str1 = "abc";
let str2 = "ahbgdc";
check_issubsequence(str1, str2);