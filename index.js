///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, price, category){

    return{
      name: name,
      price: price,
      category: category,
    };

}

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

const icecream = createMenuItem('IceCream', 3, "Dessert");
const tacos = createMenuItem('Tacos', 7, "Lunch");
const fries = createMenuItem('Fries', 2, "Side");

console.log(icecream);

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. 
Add a method to your burger object that 
automatically calculates price given a statusing as a parameter. 

Your method should accept: 

(1) A statusing (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

burger.discount = function(status) {
  if ( status === 'teacher' || status === 'student') {
    return this.price - (this.price * .25);
  } else {
    return this.price - (this.price * .10);
  }
}

console.log(burger.discount('student'));




///////////////Reviews (MVP)///////////////////

const reviews = [
    {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */

console.log(reviews[5].feedback);


/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

const newRating = {
  name: 'Sam',
  rating: 3.2,
  feedback: 'Meh.'

};

reviews.push(newRating)
console.log(reviews);


/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */

reviews[7].feedback = 'this place is chill with really cool people, great for getting work done on weekdays'

console.log(reviews[7].feedback);


/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a statusing in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(reviews, index) {
    
return (reviews[index].name + ' gave the restaurant a ' + reviews[index].rating + ' and their feedback was: '+ '\'' + reviews[index].feedback + '\'');

  }
  

console.log(getReviewByIndex(reviews, 8));


/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a statusing in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
function getLastReview(arr) {

  return(arr[arr.length - 1].name + ' gave the restaurant a ' + arr[arr.length -1].rating + ' star review and their feedback was ' + '\'' +arr[arr.length -1].feedback + '\'');
  
  } 

  console.log(getLastReview(reviews));








