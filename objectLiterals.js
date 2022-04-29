let fruits = [
    { name: "Kiwi", qty: 2 },
    { name: "Apple", qty: 4 },
    { name: "Mango", qty: 5 }
]

console.log(fruits.reduce((selectedFruits, fruit) => {

    return selectedFruits.concat(fruit.name).filter((fruit) => { return fruit.name === "Apple" });
}, []));