// Zadanie 1 i 2

const car = {
    brand : "Tesla",
    colour : "Silver",
    price : 100000000,
    changePrice (newPrice){
        this.price = newPrice;
        console.log("New car price: " + car.price);
    }
};

console.log("Marka: " + car.brand);
console.log("Kolor: " + car.colour);
console.log("Cena: " + car.price)
car.changePrice(0);

// Zadanie 3

const array = [1,2,3,4,5];

let tab = {
    sum: 0,
    sumTab(t) {
        let innerSum = 0;
        for(let i of t) {

            innerSum += i;
        }
        this.sum = innerSum;
        console.log(this.sum);
    }
};

console.log(tab.sum);
tab.sumTab(array);
console.log(tab.sum);

// Zadanie 4

const car = {
    Brand: "BMW",
    Age: 12,
    Colour: "black",
};

for(let key in car){
    console.log(key + ": " + car[key]);
}

// Zadanie 5

const car = {

    Brand: "BMW",
    Age: 12,
    Colour: "black",

    Interior : {
        Material: "Leather",
        Colour: "Brown",
        Price: 12000,
    },
};

for(let key in car.Interior){
    console.log(key + ": " + car.Interior[key]);
}

// Zadanie 6

const car = {

    Brand: "BMW",
    Age: 12,
    Colour: "black",
};

car.Name = "x";

car.Show = () => {

    console.log("Hello");
}

console.log(car.Name);
car.Show();
