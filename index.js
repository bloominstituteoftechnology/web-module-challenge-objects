///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */
//Done!

function createMenuItem(name, cost, category) {
  let newMenuObj = {
    name: name,
    price: cost,
    category: category,
  };
  return newMenuObj;
}

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
//Done!

const flatWhite = createmenuItem("Flat White", 5, "Drinks");

const cheeseBurger = createMenuItem("CheeseBurger", 20, "Lunch");

const breakfastTaco = createMenuItem("Breakfast Taco", 17, "Breakfast");

console.log("Three new menu items", flatWhite, cheeseBurger, breakfastTaco);

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
//Done!

burger.discount = function (type) {
  let discountPrice;
  if (type === "teacher" || type === "student") {
    discountPrice = this.price * 0.75;
  } else if (type === "public") {
    discountPrice = this.price * 0.9;
  } else {
    discountPrice = this.price;
  }
  return discountPrice;
};
console.log(
  "Full price is" + burger.price + ". Discounted price for teachers is ",
  burger.discount("teacher")
);

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
];

/* Task 3: Console.log just Julius' feedback */
//Done!

console.log(`${reviews[5].name}' feedback: `, reviews[5].feedback); 

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
//Done!

reviews.push({
  name: "Chris", 
  rating: 4.5, 
  feedback:"Excellent staff and experience.",
});

const lastReview = reviews.length - 1;
console.log("My feedback on the restaurant: ", reviews[lastReview]);

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */
//Done!

reviews[7].feedback = "this place is chill with really cool people, great for getting work done on weekdays";
console.log(`${reviews[7].name}'s feedback:  `, reviews[7].feedback);

/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/
//Done!

function getReviewByIndex(reviews, index) {
  let output;
  const reviewerName = reviews[index].name;
  const reviewerRating = reviews[index].rating;
  const reviewerFeedback = reviews[index].feedback;
  output = `${reviewerName} gives a ${reviewerRating} rating, with the following feedback ${reviewerFeedback}`;
  return output;
}
  console.log(getReviewsByindex(reviews, 0));

/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
//Done!

function getLastReview(arrayReviews) {
  let output;
  const latestReview = arrayReviews.length -1;
  const reviewerName = arrayReviews[latestReview].name;
  const reviewerRating = arrayReviews[latestReview].rating;
  const reviewerFeedback = arrayReviews[latestReview].feedback;
  output = `${reviewername} gives a ${reviewerRating} rating, with the following feedback  ${reviewerFeedback}`;
  return output; 
}

console.log("Most recent review ", getLastReview(reviews));


///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(arrayReviews, rating) {
    let queriedReview;
    let allResults = [];
    for (let i=0;i<arrayReviews.length; i++) {
      const ratingCompare=Math.floor(arrayReviews[i].rating);
      if(ratingCompare == rating) {
        allResults.push(arrayReviews[i]);
      }
    }
    if(allResults.length>0) {
      queriedReview=allResults;
    } else {
      queriedReview="no results found.";
    }
    return queriedReview;
  }

  console.log("All review results between 4 and 5: ", getReviewByRating(reviews, 4));

/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  function getLongReviews(arrayReviews) {
    let longReviews;
    let allResults = [];
    for (leti=0; i<arrayReviews.length;i++) {
      const numOfWords=arrayReviews[i].feedback.split("").length;
      if(numOfWords>15) {
        allResults.push(arrayReviews[i]);
      }
    }
    return longReviews;
  }
  
console.log("These are reviews longer than fifteen words: ", getLongReviews(reviews));

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


function carMaker(odometer) {
    const myObj = {
      odometer: odometer,
      drive: function (distance) {
        this.odometer += distance;
        return this.odometer;
      },
    };
    return myObj;
}

const myCar - carMaker(12);
console.log(myCar.drive(50));