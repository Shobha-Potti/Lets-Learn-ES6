//map filter
let a = [1, 2, 3]

a.map((x) => console.log(x * 2));
// it is same as a.map(function(x){console.log(x*2)});

//selecting needed data with filter helper

let vehiTypes = [
    { vehiNo: 100, vehiName: "Accord", fuelType: "Petrol", price: 200 },
    { vehiNo: 101, vehiName: "Sedan", fuelType: "diesel", price: 500 },
    { vehiNo: 102, vehiName: "CRV", fuelType: "Petrol", price: 300 },
    { vehiNo: 103, vehiName: "SUV", fuelType: "Petrol", price: 100 }
];

let filtered = vehiTypes.filter(function (vehiType) {
    return vehiType.fuelType === "Petrol"

});

console.log(filtered);
console.log(" ");
let fprice = vehiTypes.filter(function (vehiType) {
    return vehiType.fuelType === "Petrol"
        && vehiType.price >= 200

});
console.log(fprice);

//searching for a text in the string
let str = "Hello I am a UI Programmer"
console.log(str.includes("ui")); //includes filter is not caseSensitive



//querying for records with find
let users = [
    { name: "Shobha" },
    { name: "harry" },
    { name: "daniel" },
    { name: "Anne" },
    { name: "daniel" }
];
// if two elements are there with the
// same name then it will only return  the first one
let search = users.find(function (user) {
    return user.name === "daniel";
})

console.log("The name found is : " + search);



//Every and Some Helper for arrays and objects
//condenses into a single value
//for Every => every item in the list should satisfy the condition then will retiurn true
//for Some => atleast one of the item in the list should satisfy the condition.

let computers = [
    { name: "Acer", ram: 23 },
    { name: "Microsoft", ram: 11 },
    { name: "Dell", ram: 32 },
    { name: "Apple", ram: 25 }
];

//every computer ram should be more than 10

let canComputerRunThisProgram = computers.every(function (computer) {
    return computer.ram > 10
})
// if some of the computer can run the programs whose ram is between 35-50
let canSomeComputerRunThisProgram = computers.some(function (computer) {
    return computer.ram < 50 && computer.ram > 35
})

console.log("All the computers can Run the program = " + canComputerRunThisProgram);

console.log("All the computers can Run the program = " + canSomeComputerRunThisProgram);


//Reduce helper = using this we can almost use all the helpers in the ES6

let num = [10, 20, 30, 40];
let total = num.reduce(function (sum, num) {
    return sum += num;
}, 10) //can give initial value of sum

console.log("The total sum of numbers is =" + total);

let colors = [
    { name: "Red" },
    { name: "Green" },
    { name: "Blue" }
];


let myColor = colors.reduce(function (previous, color) {
    return previous.concat(color.name);

}, []);

console.log(myColor);
