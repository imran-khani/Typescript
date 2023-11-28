// bind console.log to a variable
const log = console.log.bind(console, "The answer is: ");

// learning type alias in typescript
// type Person={
//     name:string;
//     age:number;
// }

// const person:Person = {
//     name:"John",
//     age:30
// }

// learning tuples

// let myTuple:readonly [number,boolean,string]
// myTuple = [54,true,'sfdsfa']
// log(myTuple)

// learning enums

// enum Color{
//     Red=3,
//     Green,
//     Blue,
// }

// let myColor:Color = Color.Blue

// log(myColor)

// learning Classes

// class Cars {
//   name: string;
//   model: string;
//   year: number;

//   constructor(name: string, model: string, year: number) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }

//   showModel() {
//     log(
//       `This car model is ${this.model} and it's name is ${this.name} and year is ${this.year}`
//     );
//   }
// }

// const car = new Cars("BMW", "1990", 2001);

// car.showModel();

// Learning Interface

// interface Person{
//     name:string;
//     email:string;
//     phone:number
// }

// const person:Person = {
//     name:'imran',
//     email:"example@gmail.com",
//     phone:34343434
// }

