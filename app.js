'use strict';

var userPoints = 0;

console.log('HEY!');
alert('This is my guessing game!');

var user = prompt('What is your name?');
alert('Hey ' + user + '! I\'m happy you\'ve decided to check out my game');

//Question1
var answer = prompt('Is Ronnie\'s favorite kind of food Mexican? Type yes or no.').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y') {
  userPoints++;
  alert('Correct! He loves Mexican food. ' + 'You have ' + userPoints + ' points.');
} else {
  alert('Wrong! He loves Mexican food. ' + 'You have ' + userPoints + ' points.');
}

//Question2
var answer1 = prompt( ' Is Ronnie from the Seattle area? ').toLowerCase();
console.log(answer1);

if(answer1 === 'no' || answer1 === 'N') {
  userPoints++;
  alert('Correct! He\'s from the Biggest Little City, or Reno, Nevada.' + 'After Question #2 you have ' + userPoints + ' points.');
} else {
  alert('ACTUALLY... He\'s from the Biggest Little City, or Reno, Nevada.' + 'After Question #2 you have ' + userPoints + ' points.');
}

//Question3
var answer2 = prompt( ' Is Ronnie a fan of the Seattle Seahawks?');
console.log(answer2);

if(answer2 === 'no' || answer2 === 'N') {
  userPoints++;
  alert( 'Correct! Although Ronnie is a new resident of the area, he is 49er fan. The evidence of his loyalty is him admitting it. The 49ers are a terrible team, and probably will be for a while...' + 'After Question #3 you have ' + userPoints + ' points.');
} else {
  alert( 'Although Ronnie is a new resident of the area, he is 49er fan. The evidence of his loyalty is him admitting it. The 49ers are a terrible team, and probably will be for a while...' + 'After Question #3 you have ' + userPoints + ' points.');
}

//Question4
var answer3 = prompt( 'Was Ronnie ever in jazz band playing the trombone?');
console.log(answer3);

if(answer3 === 'yes' || answer3 === 'Y') {
  userPoints++;
  alert( 'Correct!. Ronnie was in jazz band when he was younger. He was also in honor and marching band as well.' + 'After Question #4 you have ' + userPoints + ' points');
} else {
  alert( 'Wrong!. Ronnie was in jazz band when he was younger. He was also in honor and marching band as well.' + 'After Question #4 you have ' + userPoints + ' points');
}

//Question5
var answer4 = prompt( ' Did Ronnie work with at risk youth for eight years? ');
console.log(answer4);

if(answer4 === 'yes' || answer4 === 'Y') {
  userPoints++;
  alert( 'Correct! Ronnie did work with at risk youth for eight years and he really enjoyed it!' + ' After Question #5 you have ' + userPoints + ' points');
} else {
  alert( 'Wrong! Ronnie did work with at risk youth for eight years and he really enjoyed it!' + ' After Question #5 you have ' + userPoints + ' points');
}

//Question6
var answer5 = 24;
var userGuess;
for ( var i = 0; i < 4; i++ ) {
  userGuess = prompt(' In high school Ronnie did track and field, and one of the events he participated in was the long jump. The world record for the long jump is held my Mike Powell at 29 ft 4 1/4 in for men and Galina Chistyakova holds the record for women at 24 ft 8 in. How long do you think Ronnie jumped rounded to the nearest foot? ');
  console.log('User guesses' + userGuess);
  userGuess = parseInt(userGuess); //Answer must be an integer or it won't be accepting
  if (userGuess === answer5) {
    userPoints++;
    alert( 'Correct! The value entered was 24 ft. However, Ronnie only jumped 23 ft. 10 in., but 24ft sounds better!' + ' After Question #6 you have ' + userPoints + ' points');
    i = 20;
  } else if (userGuess > answer5 ) {
    console.log('The user has answered greater than answer5.' + userGuess);
    alert('That answer is a bit high....');

  } else if (userGuess < answer5 ){
    console.log('The user has answered lower than answer5.' + userGuess);
    alert('That answer is a little low...');

  }
}
if (i === 4) {
  alert ('None of your answers were right... The correct anser is 24 ft. However, Ronnie only jumped 23 ft. 10 in., but 24ft sounds better!' + ' After Question #6 you have ' + userPoints + ' points');
}

//Question6
var favSeries = ['rome', 'shameless', 'heroes', 'dexter'];
var userGuess2;
for ( var j = 0; j < 6; j++) {
  userGuess2 = prompt( 'Ronnie watches a lot of series and actually prefers those over monvies. What do you think his favorite series is? ');
  console.log('user guesses' + userGuess2);
  if ( favSeries.indexOf(userGuess2.toLowerCase()) > -1 ) {
    userPoints++;
    alert('Correct! You must like this show as much as me.' + 'After question #7 you have ' + userPoints + ' out of 7. My favorite series are Rome, Shameless, Heroes, and Dexter.');
    j = 20;
  } else {
    alert(' Cool show, but not one of my favorites... Guess again!');
  }
}

if (j === 6) {
  alert(' It looks like your idea of a good series is a little different from mine... My favorite series are Rome, Shameless, Heroes, and Dexter.' + favSeries);
}
// console.log(i);
// if (i = 4) {
//   alert ('None of your answers were right... The correct anser is 24 ft. However, Ronnie only jumped 23 ft. 10 in., but 24ft sounds better!' + ' After Question #6 you have ' + userPoints + ' points');
// }
// console.log(i);
//   if (x > 5) {
//  /* do the right thing */
// } else if (x > 50) {
//  /* do the right thing */
// } else {
//  /* do the right thing */
// }
//Question6
//  'use strict';
//
// var userPoints = 0;
//
// console.log('hello yawllll');
// alert('Welcome to my guessing game!');
//
// var user = prompt('What is your name?');
// alert('Hi ' + user + '! I am so glad you want to play my game.');
//
// var answer = prompt('Is Rachel\'s favorite food kimchi? Type yes or no.').toLowerCase();
// console.log(answer);
//
// if(answer === 'yes' || answer === 'Y') {
//   userPoints++;
// } else {
//   alert('Wrong! Actually, I like awwlllllll spicy food.');
// }
//
// alert('you have ' + userPoints + ' points.');
