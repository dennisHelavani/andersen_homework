alert('Задание №1 Перевод в систему счисления');
let num1 = prompt('Введите ваше первое число', 'Ваше значение');

let num2 = prompt('Введите ваше второе число', 'Ваше значение');

if (isNaN(num1) || isNaN(num2) || num1 === '' || num2 === '') {
  console.log('Некорректный ввод!');
} else {
  console.log(parseInt(num1).toString(num2));
}
