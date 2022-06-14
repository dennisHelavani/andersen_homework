alert('Задание №2 Поиск суммы и частного');
let work = true;
while (work === true) {
  let num1 = prompt('Введите ваше первое число', 'Ваше значение');
  if (isNaN(num1) || num1 === '') {
    console.log('Некорректный ввод!');
    work = false;
    break;
  }
  let num2 = prompt('Введите ваше второе число', 'Ваше значение');
  if (isNaN(num2) || num2 === '') {
    console.log('Некорректный ввод!');
    work = false;
    break;
  } else {
    console.log(
      `Ответ: ${parseInt(num1) + parseInt(num2)}, ${
        parseInt(num1) / parseInt(num2)
      }`
    );
    work = false;
  }
}
