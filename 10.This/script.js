// Zadanie 1
function Person (name,surname,age,country,city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
}

Person.prototype.showAll = function (){
    console.log(Object.values(this))
}

Person.prototype.addAge = function (){
    this.age ++;
}

let person = new Person ("Bart", "Lan", 24, "Poland", "Cracow")

let person2 = new Person ("Btet", "Klet", 25, "USA", "Miami")

person.showAll()
person.addAge()
person.showAll()

// Zadanie 2

function Person (name,surname,age,country,city) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showAll = function (){
        console.log(Object.values(this))
    }
}

Person.prototype.addAge = function (){
    this.age ++;

}

let person = new Person ("Bard", "Lan", 23, "Poland", "Warsaw")

let person2 = new Person ("Karo", "Lan", 12, "USA", "Miami")

person.showAll()
person.addAge()
person.showAll()

person.favouriteMeal=[];
person2.favouriteMeal=[];

function showMeal(){
    console.log("Ulubione potrawy: ", this.favouriteMeal.join(", "));
}

function addMeal(meal){
    this.favouriteMeal.push(meal);
}
person.showMeal = showMeal;
person.addMeal= addMeal;
person2.showMeal = showMeal;
person2.addMeal= addMeal;

person.addMeal("makaron");
person.addMeal("spagetti");
person.showMeal();

person2.addMeal("langosh");
person2.addMeal("taco");
person2.showMeal();

//Zadanie 3

const calculator = {
    setNumbers(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },

    sum() {
        console.log(this.num1 + this.num2);
    },

    substract() {
        console.log(this.num1 - this.num2);
    },

    multiply() {
        console.log(this.num1 * this.num2);
    },

    divide() {
        if(this.num2 === 0) {
            console.log("Error divide by 0");
            return;
        }
        console.log(this.num1 / this.num2);
    },

}

calculator.setNumbers(10, 5);
calculator.sum();
calculator.substract();
calculator.multiply();
calculator.divide();

//Zadanie 4

function Ladder(steps){
    this.position = 0;
    this.height = steps;

    this.getOn = function(){

        if(this.height <=0){
            throw new Error("Ladder less or equal 0")
        } else {
            this.position =1;
            console.log(`Your start position ${this.position}`)
        }
    }
    this.checkIfFinished =function(){
        if(this.position === this.height){
            console.log("You got it")
        }

    }
    this.addStep = function(){
        if(this.position == this.height){
            console.log("Your are hight")
        }else{
            this.position += 1;
            console.log(`Your position is ${this.position}`)
            this.checkIfFinished()
        }
    }
    this.removeStep = function(){
        if(this.position === 1){
            this.position =0;
            console.log("You came down from the ladder")
        }else{
            this.position -=1;
        }
    }
}

let ladder = new Ladder(3)
ladder.getOn();
ladder.addStep()
ladder.addStep()
ladder.addStep()
