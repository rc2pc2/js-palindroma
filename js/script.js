// const userWord = prompt('Type a word');

// function isPalindrome(word){
//    let reversedWord = '';

//    for (let index = word.length - 1; index >= 0; index--) {
//       reversedWord += word[index];
//    }

//    if ( reversedWord === word){
//       return true;
//    } else {
//       return false;
//    }

//    //% return reversedWord === word;
// }

// console.log(isPalindrome(userWord));
// console.log(isPalindrome('ciao'));
// console.log(isPalindrome('nonno'));
// console.log(isPalindrome('ottetto'));


// .split(',')


// function isPalindrome(word){
//    if (word === word.split('').reverse().join('')) {
//       return true;
//    } else {
//       return false;
//    }
// }

const userChoice = prompt('Scrivi pari o dispari');
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

const aINumber = getRandomInt(1,5);

let result = oddOrEven(userNumber + aINumber);

// ? la scelta dell'utente e' uguale alla parita/disparita della somma dei due numeri?
if( result === userChoice ) {
   console.log('hai vinto!');
} else {
   console.log('HO VINTO IO!!!! COMANDERO\' IL MONDO');
}

function getRandomInt(min, max){
   return Math.floor( Math.random() * (max - min + 1)) + min;
}

function oddOrEven(number){
   if( number % 2 === 0){
      return 'pari';
   } else {
      return 'dispari';
   }
}

// function isOdd(number){
//    return number % 2 === 1;
// }

// function isEven(number){
//    return number % 2 === 0;
// }