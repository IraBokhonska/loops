// 1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

function getAgeGroup(age) {
  if (age >= 0 && age <= 11) {
    console.log("You are child.");
  } else if (age <= 17) {
    console.log("You are teenager.");
  } else if (age <= 59) {
    console.log("You are adult.");
  } else if (age <= 122) {
    console.log("You are pensioner.");
  } else {
    console.log("Enter correct age.");
  }
}

getAgeGroup(17);

// або краще так
// function getAgeGroup(age) {

//   if (age >= 0 && age <= 11) {
//     return "You are child.";
//   }

//   if (age <= 17) {
//     return "You are teenager.";
//   }

//   if (age <= 59) {
//     return "You are adult.";
//   }

//   if (age <= 122) {
//     return "You are pensioner.";
//   }

//   return "Enter correct age.";
// }

// console.log(getAgeGroup(126));

// -----------------------------------------------------------------------------------------------------------------------------------

// 2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// можна поставити сonst, але тоді всі кейси взяти в лапки

// let number = prompt("Enter number from 0 to 9.");

// number = + number;

// switch (number) {
//     case 1:
//       symbol = "!";
//       break;
//     case 2:
//       symbol = "@";
//       break;
//     case 3:
//       symbol = "#";
//       break;
//     case 4:
//       symbol = "$";
//       break;
//     case 5:
//       symbol = "%";
//       break;
//     case 6:
//       symbol = "^";
//       break;
//     case 7:
//       symbol = "&";
//       break;
//     case 8:
//       symbol = "*";
//       break;
//     case 9:
//       symbol = "(";
//       break;
//     case 0:
//       symbol = ")";
//       break;
//     default:
//       symbol = "Enter number from 0 to 9.";
//   }

//   alert(symbol);

// ------------------------------------------------------------------------------------------------------------------------------------------

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

function caculateSumOfNumbersRange(minNumber, maxNumber) {
  sum = 0;
  if (
    maxNumber >= minNumber &&
    maxNumber % 1 === 0 &&
    minNumber % 1 === 0 &&
    minNumber !== maxNumber
  ) {
    for (let index = minNumber; index <= maxNumber; index++) {
      sum += index;
    }
    console.log(sum);
  } else {
    console.log(
      "Enter correct integers. maxNumber must be bigger than minNumber."
    );
  }
}

caculateSumOfNumbersRange(1, 6);

// ------------------------------------------------------------------------------------------------------------------------------------------

// 4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.
//isNaN() переданий аргумент не є числом,розшифровка (Not a Number)
//дільники шукаються від найменшого до найбільшого

// function getGreatestCommonDivisor (firstNumber, secondNumber){
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     console.log("Enter numbers");
//   } else {
//     let gcd = 1;

//     for (let index = 1; index <= firstNumber && index <= secondNumber; index++) {
//       if (firstNumber % index === 0 && secondNumber % index === 0) {
//         gcd = index;
//       }
//     }

//     console.log(`GreatestCommonDivisor = ${gcd}`);
//   }
// }

// getGreatestCommonDivisor(15, 60);

// 5.Запитай у користувача число і виведи всі дільники цього числа.

function getDivisors(someNumber) {
  if (isNaN(someNumber)) {
    console.log("Enter number");
  } else {
    let gcd = 1;

    for (let index = 1; index <= someNumber; index++) {
      if (someNumber % index === 0) {
        gcd = index;
        console.log(gcd);
      }
    }
  }
}

getDivisors(10);
