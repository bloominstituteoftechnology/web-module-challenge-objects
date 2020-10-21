/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.*/

///////////////Menu Items (MVP)///////////////////
const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1a: Make a function that builds objects🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Add to the function createMenuItems below so it will create objects following the same format found above for latte and breakfastBurrito (name, price, category).  
The function should:
  1. Receive values for the object that will be created
  2. Create and return an object using the received values  
*/

function createMenuItem(nameValue, priceValue, categoryValue){
    let newObj = {};
    newObj.name = nameValue;
    newObj.price = priceValue;
    newObj.category = categoryValue;
    return newObj;
}

// TEST CODE:
var output = createMenuItem("Mocha", 4, "Drinks");
console.log(output);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1b: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Test your createMenuItems function by doing the following:
  1. Pass values to createMenuItems in order to create the objects (menu items)
  2. Create at least 3 menu items (objects) of your choosing making sure they have name, price, and category keys
  3. Log each returned object to the console  
  
  For example: createMenuItem("pizza",5,"lunch") would return this as the object: {name:"Pizza",price:5,category:"lunch"}
*/

// TEST CODE:
let mocha = createMenuItem("Mocha", 4, "Drinks");
console.log(mocha);

let hamburger = createMenuItem("Hamburger", 7, "Lunch");
console.log(hamburger);

let pie = createMenuItem("Pie", 6, "Dessert");
console.log(pie);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to the 
burger object below that automatically calculates price depending on the a string received as a parameter. 

Using the burger object below do the following:
  1. Add a method called discount to the burger object 
  2. The discount method should accept a string that could be "teacher", "student", or "public"
  3. Depending on the string, it will return the correct discounted price
  4. Log the correct returned price to the console

  For example: burger.discount(" teacher") would return 13.5 and burger.discount("public") would return 16.2
*/

export const burger = {
  name: "Burger", 
  price: 18, 
  category: "Lunch", 
  discount: function (discountType) {
    if (discountType === "teacher") {
      return 13.5;
    } else if (discountType === "public") {
      return 16.2;
    } else if (discountType === "student") {
      return 10.8;
    }
  }
}


///////////////Reviews (MVP)///////////////////
const reviews = [
    {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name: "Reyna", rating: 3.5, feedback: ""},
]

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Using the reviews array above:
  1. log only Julius' feedback to the console
*/

function getReviewFromName(reviews, name) {

  let review = reviews.filter(review => review.name === name);
  let reviewToObj = review[0]; // .filter method returns an array.  Convert to obj.

  console.log(reviewToObj.feedback);
  return reviewToObj.feedback;
}

// TEST CODE
output = getReviewFromName(reviews, "Julius");
console.log(output);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Using the reviews array above do the following:
  1. Following the same format (name, rating, feedback), add a new fictitious review object to the reviews array
  2. log the whole array to the console, make sure the new review is inside of it   
*/
reviews.push({name: "Rhiannon", rating: 10, feedback: "Great job!"});
console.log(reviews);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Reyna's feedback is missing! Use what you know to do the following:
  1. Add this feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
  2. log the reviews array to the console to check your work
*/

function editFeedbackByName(name) {
  // NOTE: reviews is an array of objects
  
    // use method .findIndex to get the index of the object to be edited.
    let index = reviews.findIndex((objectEntry) => objectEntry.name === name); 
    
    // Conditional to handle of the edge case of index could not be found aka. -1
    if (index === -1) {
      return "ERROR.  Could not find index.";
    } 
  
    // assign objToEdit to the object to be edited
    let objToEdit = reviews[index]; 
  
    // This line of code is mutable to the original array
    objToEdit.feedback = "this place is chill with really cool people, great for getting work done on weekdays";  
  
  
    console.log(reviews);
  
    // Tells the developer that the function completed.
    return "Success." 
  }

  // TEST CODE
  var output = editFeedbackByName("Reyna");
  console.log(output);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function to return a review based on the index of the review in the array.

Use the getReviewByIndex function below to do the following:
  1. Receive two arguements: the array that holds all the reviews and an index position of the review to display
  2. The function should return the following string: "{name} gave the restaurant a {rating} star review, and their feedback was: {feedback}"
  For example: getReviewByIndex(reviews,0) would return: "Daniela gave the restaurant a 5 star review, and their feedback was: Beautiful atmosphere and wonderful vegan options!"
*/

function getReviewByIndex(array, index) {
  // access object from array using index
  let objectEntry = array[index]; 

  let name = objectEntry.name;

  let rating = objectEntry.rating;

  let feedback = objectEntry.feedback;

  return `${name} gave the restaurant a ${rating} star review, and their feedback was: ${feedback}`
}

// TEST CODE
var output = getReviewByIndex(reviews, 2);
console.log(output);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Write a function to get information about the most recent (last) review called `getLastReview`

Use the getLastReview function below to do the following:
  1. Receive an array of objects 
  2. Return a string in the format: "{name} gave the restaurant a {rating} star review and, their feedback was: {feedback}"
  
  For example: getLastReview(reviews) would return: "Reyna gave the restaurant a 3.5 star review and, their feedback was: this place is chill with really cool people, great for getting work done on weekdays".
*/

function getLastReview(arrayOfObjects) {
  // get index of last object in array
  let index = arrayOfObjects.length - 1;

  // get the last object of the array
  let lastObjectEntry = arrayOfObjects[index]; 

  // declare variables for key values in object
  let name = lastObjectEntry.name;

  let rating = lastObjectEntry.rating;

  let feedback = lastObjectEntry.feedback;

  //  return template literal which uses variables holding values
  return `${name} gave the restaurant a ${rating} star review, and their feedback was: ${feedback}`
} 

// TEST CODE
var output = getLastReview(reviews);
console.log(output);

///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** 💪💪💪💪💪💪💪💪💪💪 STRETCH 1: 💪💪💪💪💪💪💪💪💪💪 
Use the getReviewsByRating function below to do the following:
  1. Receive the array that holds all the reviews
  2. Receive a rating
  3. Return an array with all the reviews in that range

  For example: getReviewByRating(reviews, 4) would return these reviews in the 4 range (4-4.9):
  [
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}
  ]
*/

function getReviewByRating(reviews, rating) {
  let upperRange = rating + 1;
  // will return new array to hold objects with rartings in a given range
  let newArrayOfReviewsInRange = reviews.filter(objectEntry => objectEntry.rating >= rating && objectEntry.rating < upperRange);

  return newArrayOfReviewsInRange;
}

// TEST CODE
var output = getReviewByRating(reviews, 4);
console.log(output);

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪💪   
Use the getLongReviews function below to do the following:
  1. Receive the array that holds all the reviews
  2. Return an array with all the reviews that have more than 15 words in their feedback

  For example: getLongReviews(reviews) would return:
  [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }
  ]
*/

function getLongReviews(reviews) {
 
  let newArrayOfLongReviews = reviews.filter(objectEntry => {
    // Assign variable to the string value at key feedback in the object.
    let feedbackText = objectEntry.feedback;

    // Use method .split to split string at " " in order to get words, returned in an array.
    let arrayOfWords = feedbackText.split(" ");

    // Count number of words in the returned array.
    let numberOfWords = arrayOfWords.length;
    
    // This will return true if true, and then add the object to newArrayOfLongReviews
    return numberOfWords > 15;
  } );

  return newArrayOfLongReviews;
  }

// TEST CODE
var output = getLongReviews(reviews);
console.log(output);
  

/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 3: 💪💪💪💪💪💪💪💪💪💪 
This stretch goal does not use the reviews data!  You create your own object in this stretch goal.

Use the carMaker function below to do the following:
  1. Receive a value representing the odometer (how many miles it's been driven) and use that when creating the object
  2. Create a drive method inside the object that increases the odometer value
  3. Return the object
  4. The returned object with the odometer value should have the following characteristics:
     a. The drive method which, when called, takes a distance value as its parameter
     b. The drive method should also cause the odometer value in the object to be increased by the distance
     c. Then the drive method should return the updated value of the odometer

  For example: Let's say we created the object in the variable car1 with an odometer value of 10.
  Then we called car1.drive(100)
  It would return 110 because it was created with 10 as the odometer and we added 100 to it with the drive method 
*/

function carMaker(odometerValue) {

  let car = { 
    odometer: odometerValue,
    drive: function(distance) { // this is my drive method on an object
      car1.odometer = odometerValue + distance;
      return car.odometer;
    }
  };
  return car;
}

// TEST CODE
var car1 = carMaker(10);
car1.drive(100);
console.log(car1);


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}

export default{
  foo,
  createMenuItem,
  getReviewByIndex,
  getLastReview,
}
