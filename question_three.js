// 3. Find whether a given two strings m and n are isomorphic.

let size = 256;

function areIsomorphic(str1, str2) {

    let m = str1.length;
    let n = str2.length;

    if (m != n)
        return false;

    let marked = new Array(size);
    for (let i = 0; i < size; i++)
        marked[i] = false;

    let map = new Array(size);
    map.fill(0);

    for (let i = 0; i < size; i++)
        map[i] = -1;

    for (let i = 0; i < n; i++) {

        if (map[str1[i].charCodeAt()] == -1) {

            if (marked[str2[i].charCodeAt()] == true)
                return false;

            marked[str2[i].charCodeAt()] = true;

            map[str1[i].charCodeAt()] = str2[i].charCodeAt();
        }

        else if (map[str1[i].charCodeAt()] != str2[i].charCodeAt())
            return false;
    }

    return true;
}

let res = areIsomorphic("egg", "add");
console.log(res);
let res1 = areIsomorphic("too", "bar");
console.log(res1);

