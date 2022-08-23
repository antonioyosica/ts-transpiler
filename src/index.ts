// Basic Types
const x:number = 10
const s:string = "Vaawel"
const b:boolean = true
console.log(x)


// Object
let numbers:number[] = [10, 23, 4, 6, 20]
console.log(numbers)
console.log(typeof numbers)
numbers.push(5)
console.log(numbers)


// Tupla
let tuple:[number, string, string[]]
tuple = [2, "António Yosica", ['M', '09-02-1997']]
console.log(tuple)

const user:{name: string; age: number} = {
    name: 'António Yosica, Jr.',
    age: 25
}
console.log(user)
console.log(user.name)


// Any Type
let y:any
y = 0
y = "Test"
y = []


// Union Type
let id:string | number | boolean = "Água"
id = 1


// Type Alias
type myType = number | string
let userId:myType
userId = 10


// Enum
enum SIZE {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}
const tShirt = {
    name: "YOS Shirt",
    size: SIZE.G
}
console.log(tShirt)


// Literal Types
let test: "auth" | null


// Functions
function sum(a:number, b:number):string{
    return `Soma: ${a + b}`
}
console.log(sum(5, 4))

function greeting(name:string, greet?:string):void{
    if(greet){
        console.log(`Olá ${greet} ${name}`)
        return
    }
    console.log(`Olá ${name}`)
}
greeting("Manuel")
greeting("Lucas", "Sr.")


// Interfaces
interface MathFunctionParams {
    n1:number,
    n2:number
}
function multiply(nums:MathFunctionParams){
    return nums.n1 * nums.n2
}
console.log(multiply({n1:3, n2:8}))


// Narrowing
function doSomething(info:number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}
doSomething(9)
doSomething(true)


// Generics
function showArraysItems<T>(array:T[]){
    array.forEach((item) => {
        console.log(item)
    })
}
const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]
showArraysItems(a1)
showArraysItems(a2)


//Classes
class User{
    name
    role
    isApproved

    constructor(name:string, role:string, isApproved:boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserRole(canShow:boolean):void{
        if(canShow){
            console.log(`Role: ${this.role}`)
            return
        }
        console.log("Restricted info")
    }
}
const yosica = new User('António Yosica', 'Admin', true)
console.log(yosica)
yosica.showUserRole(true)


// Interfaces in class
interface IVehicle {
    brand:string
    showBrand():void
}
class Car implements IVehicle{
    brand
    model

    constructor(brand:string, model:string){
        this.brand = brand
        this.model = model
    }

    showBrand(): void {
        console.log(`The car's brand is: ${this.brand}`)
    }
}

const toyota = new Car('Toyota', 'Rav4')
toyota.showBrand()


// Inherance
class SuperCar extends Car{
    engine

    constructor(brand:string, model:string, engine:number){
        super(brand, model)
        this.engine = engine
    }
}

const audi = new SuperCar('Audi', 'M500', 2.0)
console.log(audi)
audi.showBrand()


// Decorators
function BaseParameters(){
    return function <T extends {new (...args:any[]):{}}>(constructor:T){
        return class extends constructor{
            id = Math.random()
            createAt = new Date()
        }
    }
}

@BaseParameters()
class Person{
    name

    constructor(name:string){
        this.name = name
    }
}

const lucas = new Person("Lucas Yosica")
console.log(lucas)
