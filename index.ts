// // bind console.log to a variable
const log = console.log.bind(console, "The answer is: ");

// // learning type alias in typescript
// // type Person={
// //     name:string;
// //     age:number;
// // }

// // const person:Person = {
// //     name:"John",
// //     age:30
// // }

// // learning tuples

// // let myTuple:readonly [number,boolean,string]
// // myTuple = [54,true,'sfdsfa']
// // log(myTuple)

// // learning enums

// // enum Color{
// //     Red=3,
// //     Green,
// //     Blue,
// // }

// // let myColor:Color = Color.Blue

// // log(myColor)

// // learning Classes

// // class Cars {
// //   name: string;
// //   model: string;
// //   year: number;

// //   constructor(name: string, model: string, year: number) {
// //     this.name = name;
// //     this.model = model;
// //     this.year = year;
// //   }

// //   showModel() {
// //     log(
// //       `This car model is ${this.model} and it's name is ${this.name} and year is ${this.year}`
// //     );
// //   }
// // }

// // const car = new Cars("BMW", "1990", 2001);

// // car.showModel();

// // Learning Interface

// // interface Person{
// //     name:string;
// //     email:string;
// //     phone:number
// // }

// // const person:Person = {
// //     name:'imran',
// //     email:"example@gmail.com",
// //     phone:34343434
// // }

// // const add = (x,y)=>x * y

// // log(add(4,5))

// interface University{
//     name:string,
//     department:string,
//     year:number,
//     printUniversityInfo(name:string,department:string,year:number):number & string
// }

// interface University {
//     name: string;
//     department: string;
//     year: number;
//     printUniversityInfo(name: string, department: string, year: number): string;
// }

// const uni: University = {
//     name: 'Agriculture university of peshawar',
//     department: 'BSCS',
//     year: 2020,
//     printUniversityInfo(name, department, year) {
//         return `${name} ${department}, ${year}`;
//     }
// }

// for (const [key,value] of Object.entries(uni) ){
//         if(typeof uni[key] != 'function')
//         continue
//     log(`${key}: ${value}`)
// }

// interface University {
//     name: string;
//     department: string;
//     year: number;
//     printUniversityInfo(name: string, department: string, year: number): string;
// }

// const uni: University = {
//     name: 'Agriculture university of peshawar',
//     department: 'BSCS',
//     year: 2020,
//     printUniversityInfo(name, department, year) {
//         return `${name} ${department}, ${year}`;
//     }
// }

// console.log(Object.entries(uni));

// interface University {
//   teacherName: string;
//   studentName: string;
//   teacherId: number;
//   studentId: number;
// }

// interface Student extends University {
//   studentLastName: string;
//   teacherLastName: string;
// }

// const stdTeacher: Student = {
//   studentId: 1,
//   teacherId: 3,
//   teacherName: "imran",
//   teacherLastName: "khan",
//   studentLastName: "jamal",
//   studentName: "kamal",
// };

// log(stdTeacher.studentLastName);

// interface Teacher {
//   startClass(): void;
//   endClass(): void;
// }

// class Student implements Teacher {
//   startClass() {
//     log("Class has started");
//   }
//   endClass() {
//     log("Class has ended");
//   }
// }

// const teacher = new Student();
// teacher.startClass();
// teacher.endClass();
// log(teacher);

// learning Generics

// Generic function
// function identity<T>(arg: T): T {
//   return arg;
// }

// const result = identity<string>("Hello, world!");
// console.log(result);

// // Generic class
// class Box<T> {
//   private value: T;

//   constructor(value: T) {
//     this.value = value;
//   }

//   getValue(): T {
//     return this.value;
//   }
// }

// const box = new Box<number>(42);
// const box2 = new Box<string>("Hello, world!"); 
// console.log(box.getValue());

// // Generic interface
// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// const pair: Pair<string, string> = {
//   first: "one",
//   second: '2',
// };
// console.log(pair);


// const sum =<T> (a:T,b:T)=>{
//   return a+b
// }