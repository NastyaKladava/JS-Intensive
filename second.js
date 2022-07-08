function secondFunc() {
    const num1 = prompt('Введите число', '3');
    if(num1 === null || num1 === '' || !isFinite(+num1)) {
        console.log("Некорректный ввод!");
        return false;
    }

    const num2= +prompt('Введите ещё одно число', '4'); 
    if((num2 === null || num2 === '') || !isFinite(+num2)) {
        console.log("Некорректный ввод!");
        return false;
    }

    console.log(`Ответ: ${+num1 + +num2}, ${+num1 / +num2}`);
};
secondFunc();