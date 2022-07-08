const a = prompt('Введите число', '1');
const b = prompt('Введите ещё одно число', '2');

function firstFunc(num1, num2) {
    if((num1 === '' || num2 === '') || (num1 === null || num2 === null)) return "Некорректный ввод!";
    if(!isFinite(+num1) || !isFinite(+num2)) return "Некорректный ввод!";
    return Number(num1).toString(Number(num2));
};
console.log(firstFunc(a, b));