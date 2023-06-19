function XO(str) {
    let x = 0
    let o = 0
    let strArr = str.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'o' || strArr[i] === 'O') {
            o++
        } else if (strArr[i] === 'x' || strArr[i] === 'X') {
            x++
        } 
    }
    if (x === o) {
        return true
    }
    else {
        return false
    }
}

console.log(XO("ooxx")) // true
console.log(XO("xooxx")) // false
console.log(XO("ooxXm")) // true
