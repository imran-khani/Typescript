// bind console.log to a variable
const log = console.log.bind(console, "The answer is: ");

// learning type alias in typescript
type Person={
    name:string;
    age:number;
}

const person:Person = {
    name:"John",
    age:30
}
