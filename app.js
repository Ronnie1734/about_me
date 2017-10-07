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
  alert('Correct! He loves Mexican food. ' + 'You have ' + userPoints + ' point.');
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


/*'use strict';

var userPoints = 0;

console.log('hello yawllll');
alert('Welcome to my guessing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('Is Rachel\'s favorite food kimchi? Type yes or no.').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('Wrong! Actually, I like awwlllllll spicy food.');
}

alert('you have ' + userPoints + ' points.'); */
