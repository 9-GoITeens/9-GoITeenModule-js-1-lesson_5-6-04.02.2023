//Довжина строки. Властивість length

const message = 'У цій строці 25 символів.';

// console.log(message.length);


//Конкатинація строк
const furstName = 'Chelsy';
const lastName = 'Esmerald';

// console.log(furstName + " " + lastName);

/*Напиши скрипт який виводить строку у форматі:
* "Гість х у поселяється в z номер q"
* підстав замість x y z q значення змінних.
*/

const room = 716;
const type = 'VIP';
const welcomeMsg = 'Гість'+ " "+  furstName + " " + lastName + " " +
 "поселяється" + " " + "в" + " " +  type +  " " + "номер" + " " + room;

// console.log(welcomeMsg);
// console.log(`Гість ${furstName} ${lastName} поселяється в ${type} номер ${room}`);


/* 
* Шаблонні стороки
* Створюєємо строку поселення в готель
*/
const quantity = 10;
const ordermsg = `Ви замовили ${quantity} холодильників`;

// console.log(ordermsg);

/*
Нормалізація з методом toLowerCase()
*/
// Що шукаєм?
// const tel = "Samsung";
// const inOb = 'samsung';
// const normalixeTel = tel.toLowerCase();

// let tel = prompt("дай бренд");
// tel = tel.toLowerCase(); 
// console.log(tel);

// console.log(normalixeTel);


// Метод slice()
const tel = "Samsung";

// console.log(tel.slice(1, 5));
// console.log(tel);


// Пошук в строці з методом includes()

const blackListedWord1 = 'спам';
const blackListedWord2 = 'розпродаж';

const string1 = "Привіт, я продавець Абдул, це не спам, пропоную тобі мільйон!";
console.log(string1.includes(blackListedWord1));
console.log(string1.includes(blackListedWord2));

const string2 = "Найбільший РОЗПРОДАЖ в цю неділю, не пропустіть!";
const normalixeSt2 = string2.toLowerCase();
console.log(normalixeSt2.includes(blackListedWord2));

// console.log(string2.includes(blackListedWord1));
// console.log(string2.toLowerCase().includes(blackListedWord2));
// console.log(string2.includes(blackListedWord2));

const string3 = "Рекламна компанія #fatLivesmatter";
console.log(string3.includes(blackListedWord1));
console.log(string3.includes(blackListedWord2));





