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

// Alternate Solution

function XOS(str) {
    let strArr = str.toLowerCase().split('')
    return (strArr.filter(x => x === 'x').length) === (strArr.filter(x => x === 'o').length)
}

console.log(XOS("ooxx")) // true
console.log(XOS("xooxx")) // false
console.log(XOS("ooxXm")) // true