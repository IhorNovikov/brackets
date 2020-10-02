module.exports = check = (str, bracketsConfig) => {
    if (str.match(/\d/)) {
        return Number.isInteger(([...str].reduce((s, c) => s + +c, 0)) / [...bracketsConfig].flat().reduce((s, c) => s + +c, 0))
    } else {
        if (str.match(/\[\(\]|\(\)\)\(|\|\(\|\)|\[\]\]\[\[\]/)) {
            return false
        }
        return ((str.match(/\)/g) ? str.match(/\)/g).length : 0) + (str.match(/\(/g) ? str.match(/\(/g).length : 0) +
            (str.match(/\]/g) ? str.match(/\]/g).length : 0) + (str.match(/\[/g) ? str.match(/\[/g).length : 0) +
            (str.match(/\}/g) ? str.match(/\}/g).length : 0) + (str.match(/\{/g) ? str.match(/\{/g).length : 0) +
            (str.match(/\|/g) ? str.match(/\|/g).length : 0)) % 2 == 0 ? true : false
    }
}
