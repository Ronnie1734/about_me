'use strict';

var userPoints = 0;

console.log('HEY!');
alert('My name is Ronnie and this is my guessing game!');

var user = prompt('What is your name?');
alert('Hey ' + user + '! I\'m happy you\'ve decided to check out my game. Feel special, you\'re going to learn a little about me!');

var answer = prompt('Is Ronnie\'s favorite kind of food Mexican? Type yes or no.').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y') {
  userPoints++;
} else {
  alert('Wrong! He loves Mexican food.');
}
alert('You have ' + userPoints + ' points.');

var answer1 = prompt( ' Is Ronnie from the Seattle area? ').toLowerCase();
console.log(answer1);

if(answer1 === 'no' || answer1 === 'N') {
  userPoints++;
} else {
  alert('ACTUALLY... He\'s from the Biggest Little City, or Reno, Nevada.');
}
alert('After Question #2 you have ' + userPoints + ' points.');

var answer2 = prompt( ' Is Ronnie a fan of the Seattle Seahawks?');
console.log(answer2);

if(answer2 === 'no' || answer2 === 'N') {
  userPoints++;
} else {
  alert( 'Although Ronnie is a new resident of the area, he is 49er fan. The evidence of his loyalty is him admitting it. The 49ers are a terrible team, and probably will be for a while...');
}
alert( 'After Question #3 you have ' + userPoints + ' points.');

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

alert('you have ' + userPoints + ' points.');
*/
