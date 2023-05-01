// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// function isPalindrom(number) {
//   if (isNaN(number) || number < 10000 || number > 99999) {
//     console.log("Enter five-digit integer.");
//   } else {
//     number = number.toString();

//     let reverse = "";

//     for (const num of number) {
//       reverse = reverse + num;
//     }

//     console.log(reverse);

//     if (reverse === number) {
//       console.log("The number is palindrom.");
//     } else {
//       console.log("The number isn't palindrom.");
//     }
//   }
// }

// isPalindrom(33333);

// -----------------------------------------------------------------------------------------------------------------------------------------
// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// function getDiscount(amount) {
//   if (isNaN(amount)) {
//     console.log(`Enter correct sum.`);
//   } else {
//     let discount = "";

//     if (amount < 200 && amount > 0) {
//       discount = "0";
//       sum = amount;
//     } else if (amount >= 200 && amount < 300) {
//       discount = "3 %";
//       sum = amount * (1 - 0.03);
//     } else if (amount >= 300 && amount < 500) {
//       discount = "5 %";
//       sum = amount * (1 - 0.05);
//     } else {
//       discount = "7 %";
//       sum = amount * (1 - 0.07);
//     }
//     console.log(
//       `You have to pay ${sum.toFixed(2)} $, your discount is ${discount}.`
//     );
//   }
// }

// getDiscount(1000);

// -------------------------------------------------------------------------------------------------------------------
// 3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

function getTypeOfNumber(array) {
  positive = 0;
  negative = 0;
  even = 0;
  odd = 0;
  zeros = 0;
  decimal = 0;

  for (let index = 0; index < 10; index++) {
    if (array[index] > 0) {
      positive++;

      if (array[index] % 2 === 0) {
        even++;
      } else if (array[index] % 2 === 1) {
        odd++;
      } else {
        decimal++;
      }
    } else if (array[index] < 0) {
      negative++;

      if (array[index] % 2 === 0) {
        even++;
      } else if (array[index] % 2 === -1) {
        odd++;
      } else {
        decimal++;
      }
    } else {
      zeros++;
    }
  }
  console.log(
    `We have ${positive} positive, ${negative} negative, ${zeros} zero, ${even} even, ${odd} odd, ${decimal} decimal numbers.`
  );
}

getTypeOfNumber([1, 1, 4, 5, 6, -1, 0, 0, 0, -0.25]);
