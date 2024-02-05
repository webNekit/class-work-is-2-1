// const array = ["Tom","bob",3,4];
// console.log(array[40])

let college = [
    { name: "Tom", age: 17, group: "ИС-2-2" },
    { name: "Bob", age: 15, group: "ИС-2-1" },
    { name: "Stan", age: 23, group: "ИС-2-2" },
    { name: "Harry", age: 17, group: "ИС-4-1" },
];

let count = 2
let studentAge = college[count]["age"];
let studentName = college[count]["name"];

if ( studentAge >= 18 ) {
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`);
} else if ( studentAge < 18 ) {
    console.log(`Студент ${studentName} не соверешннолетний. Ему ${studentAge} лет`);
}