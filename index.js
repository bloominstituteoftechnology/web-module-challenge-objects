///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};


/* Task 1a: write a function to return more menu items with the same format as the items above. */

// provided function with three parameters that will be chosen when the function is called
function createMenuItem(itemName, itemPrice, itemCategory){
    // decalre a new object with the three properties
    // changed parameter names to not match the property names
    const anotherItem = {name: itemName, price: itemPrice, category: itemCategory};
    // return whatever is now stored in the object
    return anotherItem;
}
// Note, do not have to choose the values for the parameters, they will be chosen when function is called
// And we do not need to name the item because when calling the function the value returned by the function
// will be assigned to some object name also chosen by the one who calls the function.


/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

// Now I can call / invoke the function 3 times, each with different arguments.
// Notice the function will take my inputs and write the entire object in curly braces for me,
// and assign the object to a variable name I choose.
const miniTacos = createMenuItem("minitacos", 3, "appetizer");
const salad = createMenuItem("salad", 6, "appetizer");
const wings = createMenuItem("wings", 9, "late night snack");


/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 
Your method should accept: 
(1) A string (teacher, student, or public)
and should return a number. 
For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/

// using the object dot notation to create a method (a function within the object)
// pass through the string as a parameter
burger.discountPrice(clientType); {
  // Simple conditional statement can be put into a turnary operator
  clientType == "teacher" || clientType == "student" ? price = 0.75*price : price = 0.9*price;
  // return the value stored in price
  return price;
}


///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
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

reviews[8] = {name:"Matt", rating: 4, feedback: "Delicious salad with fresh vegetables and sweet dressing, but minus 1 for not having any croutons."};

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */

reviews[7].feedback = "this place is chill with really cool people, great for getting work done on weekdays";

/*  Task 6: Write a function to return a review based on the index of the review in the array.
 Your function should take two arguments:
(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.
and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0 (0 is the index in the reviews array)
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
function getReviewByIndex(reviews, index) {
    // return the string by using string interpolation
    // to access the name we need to use array notation with the index and dot notation for the object property
    // to access the rating and feedback is same as the name
    return `${reviews[index].name} gave the restaurant a ${reviews[index].rating} star review and their feedback was: ${reviews[index].feedback}`;
  }
  

/* Task 7: Write a function to get information about the most recent review called `getLastReview`
getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/

// function definition with reviews array as a parameter
function getLastReview(reviews) {
    // determine the last index in the array
    let lastIndex = reviews.length - 1;  
    // the last element of an array will have an index one less than the length of the array, i.e. array length of 10 items will have indices 0-9, last review would be index = 9
    return `${reviews[lastIndex].name} gave the restaurant a ${reviews[lastIndex].rating}, and their feedback was: ${reviews[lastIndex].feedback}`;
  }


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 
  (1) An array of objects
  (2) A rating
  and should return an array of objects. 
  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(reviews, rating) {
      // must have an array to store the desired reviews in
      let theseRatings = [];
     // for-in loop to check through reviews array
     for(let index in reviews) {
       // determine a range around the rating parameter, i'm choosing to return ratings within 0.5 star
       // i.e. rating = 4.5, then return ratings between 4 and 5 inclusively.
       if(reviews[index].rating >= rating - 0.5 && reviews[index].rating <= rating + 0.5) {
         // range is satisfied, use push method to store in theseRatings array
         theseRatings.push(reviews[index]);
       }
     }
     // for-in loop is complete, we checked each array element and its rating, now return the theseRatings array
     return theseRatings;
  }

  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  function getLongReviews(/* code here */) {
    /* code here */
  }
  

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
    /* code here */
    
}
