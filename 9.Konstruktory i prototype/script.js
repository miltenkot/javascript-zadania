// Zadanie 1

function Person(name,surname,age,country,city,language){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
}
Person.prototype.changeAge = function (newAge){
    this.age = newAge
}
Person.prototype.changeCity = function(newCity){
    this.city = newCity
}

let one = new Person ('Bartlomiej', 'Lanczyk', 24,'Poland', 'Cracow', 'Polish' )
let two = new Person ('Geralt', 'ZRIVI', 30, 'Poland', 'Czestochowa', 'Polish')

console.log(one)
one.changeAge(23)
two.changeCity("Cracow");

console.log(one,two)

// Zadanie 2

function Calc(a, sign, b) {
    this.a = a;
    this.sign = sign;
    this.b = b;

    this.result = 0;
    switch(this.sign) {
        case '+': this.result = this.a + this.b; break;
        case '-': this.result = this.a - this.b; break;
        case '*': this.result = this.a * this.b; break;
        case '/': this.b == 0 ? "Nie dzielimy przez zero": this.result =  this.a/this.b; break;
    }
    this.clear = () => {this.result = 0};
    this.getResult = () => this.result;
};

const add = new Calc(2,'+',8);
console.log(add.getResult());
add.clear();
console.log(add.getResult());

const div = new Calc(2, '/', 0);
console.log(div.getResult());
add.clear();
console.log(div.getResult());

// Zadanie 3
function Game ()
{
    Game.prototype.number = null
    this.rand = function () {
        return setInterval(()=>{
            let rand = Math.floor(Math.random() *10 )+1;
            game_one.__proto__.number = rand;
            console.log(this.__proto__.number)
        }, 1000)
    }
    this.check = function (){
        return setInterval (() =>{
            console.log(this.__proto__.number);
            if(this.__proto__.number >= 5){
                console.log('finished');
                clearInterval(first);
                clearInterval(second)
            }
        }, 1000)
    }
}
let game_one = new Game();
let game_two = new Game();

var first = game_one.rand();
var second = game_two.check()
