// let students = ["Андрей", "Иван", "Стас"];
// students[50] = "Индекс 50";
// console.log(students);


// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
// college[1][1] = 112
// let kab = college[1][1]
// console.log(college);

let number = [ [1,2,3], [1,2], ["ИС-2-2", "ИС-2-1"] ];

const coutLenght = 2;
const arrayLenght = number.length;

if ( arrayLenght === coutLenght ) {
    console.log("ok");
} else if ( arrayLenght < coutLenght ) {
    let result = coutLenght - arrayLenght;
    console.log(`Длина вашего массива: ${arrayLenght}. Длину массива нужно увеличить до ${coutLenght}. Прибавьте к массиву значение ${result}`);
} else if ( arrayLenght > coutLenght ) {
    result = arrayLenght - coutLenght;
    console.log(`Длина вашего массива: ${arrayLenght}. Длину массива нужно уменьшить до ${coutLenght}. Удалите из массива ${result} значения`)
}