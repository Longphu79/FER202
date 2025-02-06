const person = {
age: 25,
name: "LongPhu"
};
console.log(`Toi ten la: ${person.name}, ${person.age}`);
    //tao 1 mang people gom 5 doi tuong person
const people = [
    { age: 26,name: "LongPhu"},
    { age: 27,name: "LongPhu"},
    { age: 28,name: "LongPhu"},
    { age: 29,name: "LongPhu"},
    { age: 30,name: "LongPhu"}
];
const peoplemap = people.map((p, index) => ({
    name: p.name,
    age: p.age
  }))
 

