
// function createMenuItem(one, two, three) {
//     let obj = {}
//     obj.name = one;
//     obj.price = two;
//     obj.category = three;
//     return obj
//   }
function createMenuItem(one, two, three) {
    this.name = one;
    this.price = two;
    this.category = three;
  }
  Burger = new createMenuItem('burger', 5, 'dinner');
  Pizza = new createMenuItem('pizza', 6, 'dinner');
  Pancake = new createMenuItem('pancakes', 4, 'breakfast');
  /* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1b: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  Invoke your function!
  Test your createMenuItems function by doing the following:
    1. Pass values to createMenuItems in order to create the objects (menu items)
    2. Create at least 3 menu items (objects) of your choosing making sure they have name, price, and category keys
    3. Log each returned object to the console  
    
    For example: createMenuItem("pizza",5,"lunch") would return this as the object: {name:"Pizza",price:5,category:"lunch"}
  */
//   console.log(createMenuItem('burger', 5, 'dinner'))
//   console.log(createMenuItem('pizza', 10, 'dinner'))
//   console.log(createMenuItem('pancakes', 4, 'breakfast'))
console.log(Burger);
console.log(Pizza);
console.log(Pancake);