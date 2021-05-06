// const reviews = [
//     {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
//     {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
//     {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
//     {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
//     {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
//     {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
//     {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
//     {name: "Reyna", rating: 3.5, feedback: ""},
// ]

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

// const getReviewByRating = (ar, rate) => ar.filter(obj => obj.rating >= rate)
// const getLongReviews = ar => ar.filter(obj => obj.feedback.split(' ').length > 15)
//   reviews.forEach(obj => console.log(obj.feedback.split(' ').length))

// console.log(getReviewByRating(reviews, 4));
// console.log(getLongReviews(reviews));

function carMaker(odo) {
    this.odo = odo;
    this.drive = function(odo2){
      this.odo += odo2;
      return this.odo;
    }
  }
