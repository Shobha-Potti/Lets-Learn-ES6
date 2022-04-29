function getMessage() {
    const year = new Date().getFullYear();
    // return "The year is " + year ;
    // equivelent to the above code is below 
    return `The year is ${year}` //using backticks (`)
    //and for the variable use ${variableName}
    //or u can write like
    //return `the year is ${new date().getFullYear()}`
}
console.log(getMessage());