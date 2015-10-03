//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

var me = {
  name: 'Ryan',
  age: '29'
}

alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: 'Rob Zombie', 
  food: 'pasta',
  person: 'Molly', 
  book: 'Bobby Fisher Teaches Chess', 
  movie: 'The Life Aquatic', 
  holiday: 'The 4th of July'
}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Audi S4 Avant';

favoriteThings.brand = 'Kraft';



//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = 'Lettuce';

favoriteThings.book = '50 Shades of Gray';




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};

var item = 'firstPocket';

backPack['item'] = 'chapstick';

backPack.color = 'green';


//After you do the above, alert your entire backPack object.

alert(backPack{});

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: 'Ryan',
  age: 29, 
  height: '6 foot 1 inch', 
  gender: 'male', 
  married: 'true', 
  eyeColor: 'brown', 
  hairColor: 'brown'
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for(var stuff in me) {
  alert(me[stuff]);
}




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  song1: "2min 32seconds",
  song2: "5seconds",
  song3: "3min 3seconds", 
  song4: "3minutes 21seconds", 
  song5: "17minutes"
}

//Now, loop through your album object alerting every song title individually.

for(var songs in album) {
  alert(songs);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Utah: 17500, 
  Nevada: 1200, 
  Washington: 50000, 
  Florida: 'too many', 
  Virginia: 12567321
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for(var population in states){
  if(states[population] > 30000){
    alert(population)
  }
}




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for(var trueThang in user) {
  if(!user[trueThang]) {
    delete user[trueThang];
  };

}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here

var me = {
  name: 'Ryan', 
  username: 'drdork',
  pwHash: 'this is my password'
}

for(var switcher in user){
  user[switcher] = me[switcher];
}



//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmountain.com';



//Now call the sayName method that's on the user object which will alert the users email

user.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function (){
  alert('hello');
}

methodCollection.logHello = function(){console.log('hello');}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(a, b, c){
  var newPerson = {name: a, birthday: b, ssn: c};
  return newPerson;
}
// RG how would you save that new object globally so it could be captured or would that go to a DB where you wouldn't need it again in the script? 


//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

 function MakeCard(n, b, s, a){
var creditCard = {name: n, birthday: b, ssn: s, address: a};
return creditCard;
 }
  
  
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

var newPerson = {name: 'ryan', weight: 'too much', color: 'white'}
var creditCard = {type: 'visa', limit: 70000, rate: '15%'};

function bindCard(person, card){
  var boundCard = Object.assign(person, card);
  return boundCard;

}

var ryanCard = bindCard(newPerson, creditCard); // do this to get out of the function scope if you need to use it globally.

