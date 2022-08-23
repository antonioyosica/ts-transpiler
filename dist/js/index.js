"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 10;
const s = "Vaawel";
const b = true;
console.log(x);
let numbers = [10, 23, 4, 6, 20];
console.log(numbers);
console.log(typeof numbers);
numbers.push(5);
console.log(numbers);
let tuple;
tuple = [2, "António Yosica", ['M', '09-02-1997']];
console.log(tuple);
const user = {
    name: 'António Yosica, Jr.',
    age: 25
};
console.log(user);
console.log(user.name);
let y;
y = 0;
y = "Test";
y = [];
let id = "Água";
id = 1;
let userId;
userId = 10;
var SIZE;
(function (SIZE) {
    SIZE["P"] = "Pequeno";
    SIZE["M"] = "M\u00E9dio";
    SIZE["G"] = "Grande";
})(SIZE || (SIZE = {}));
const tShirt = {
    name: "YOS Shirt",
    size: SIZE.G
};
console.log(tShirt);
let test;
function sum(a, b) {
    return `Soma: ${a + b}`;
}
console.log(sum(5, 4));
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Manuel");
greeting("Lucas", "Sr.");
function multiply(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiply({ n1: 3, n2: 8 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(9);
doSomething(true);
function showArraysItems(array) {
    array.forEach((item) => {
        console.log(item);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Role: ${this.role}`);
            return;
        }
        console.log("Restricted info");
    }
}
const yosica = new User('António Yosica', 'Admin', true);
console.log(yosica);
yosica.showUserRole(true);
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    showBrand() {
        console.log(`The car's brand is: ${this.brand}`);
    }
}
const toyota = new Car('Toyota', 'Rav4');
toyota.showBrand();
class SuperCar extends Car {
    constructor(brand, model, engine) {
        super(brand, model);
        this.engine = engine;
    }
}
const audi = new SuperCar('Audi', 'M500', 2.0);
console.log(audi);
audi.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const lucas = new Person("Lucas Yosica");
console.log(lucas);
