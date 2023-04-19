//დავალება 1

function mushni (...args) {
    const numbers = args.filter(value => typeof value === 'number');

    if (numbers.length === 0) {
        return "No numbers";
      }

    const changed = numbers.map(value => {
        if (value % 2 === 0) {
            return value / 2;
        } else {
            return value ** 2;
        }
    });

    const sum = changed.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const halfSum = sum / 2;
    return Math.round(halfSum);
}

console.log(mushni(1,2,3,4,5,6));
console.log(mushni(1,23,34,'natia',0,20));
console.log(mushni('natia', 'mushni', 'forever'));

//დავალება 2  (მოცემულია რიცხვების ერეი [ 4, 5, 11, 2, 9, 99, 1092, 1 და ა.შ]; გევალებათ დაალაგოთ ამ მასივის ელემენტები ზრდადობით)

const arr = [4, 5, 11, 2, 9, 99, 1092, 1]

arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);


//დავალება 3 (წინა მაგალითში მიღებული ერეის გადაურეთ filter ფუნქციით და დააბრუნეთ მხოლოდ ლუწი ელემენტები.)

const newNumbers = arr.filter(function(num){
    return num % 2 === 0;
});

console.log(newNumbers);

//დავალება 4 (წინა მაგალითში მიღებულ ერეის გადაურეთ reduce ფუნქციით და დაითვალეთ ელემენტების ერთმანეთზე ნამრავლი.)

const multifly = newNumbers.reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(multifly);

