//Program to show different ways to loop inside Arrays Na using array filters
let vehicles = ["accord", "Sedan", "Crv"];
vehicles.push("Bullero");

console.log(vehicles);

vehicles.forEach(function (vehicle) { console.log(vehicle) });
vehicles.pop();
console.log("Or you Can loop like this As well");
for (let vehicle of vehicles) {
    console.log(vehicle);
}
