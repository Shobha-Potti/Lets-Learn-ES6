function balancedParen(string) {
    return !string.split("").reduce((pre, str) => { // ! logical Not reverses the false to true and true to false
        if (str === "(") return ++pre;  //So anything apart from 0 will be considered unbalanced
        if (str === ")") return --pre;
        return pre; //0 is falsy value
    }, 0);

}
console.log(balancedParen("(asydg))"));