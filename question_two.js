// 2.Find whether these two string are anagram of each other or not

function checkAnagrams(str1, str2) {
    str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('') ? console.log("isAnagrams") : console.log("isNotAnagrams");
}

checkAnagrams("Cat", "act");
checkAnagrams("tap", "pet");