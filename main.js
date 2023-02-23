var menu = {
    courses: {
        appetizers: [ ],
        mains: [ ],
        desserts: [],
 },

 addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
        name: dishName,
        price: dishPrice
    }
    this.courses[courseName].push(dish);
 },

 getRandomDishFromCourse: function(courseName) {
    let dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
   
 },

 mgenerateRandomMeal: function(){
    const appetizer = menu.getRandomDishFromCourse('appetizer');
    const main = menu.getRandomDishFromCourse('main');
    const dessert = menu.getRandomDishFromCourse('dessert');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return (`Your surpise meal is ${appetizer.name}, ${main.name}, and ${dessert.name} which comes to $${totalPrice}.`);
 },


    }


 menu.addDishToCourse('appetizers', 'Side Salad', 4.99 );
 
 menu.addDishToCourse('appetizers', 'Truffle Fries', 4.75 );

 menu.addDishToCourse('appetizers', 'Hummus', 6.99 );

 menu.addDishToCourse('mains', 'Steak and Frites', 19.99 );

 menu.addDishToCourse('mains', 'Chicken Wrap', 14.99 );

 menu.addDishToCourse('mains', 'Vegetable Lasagna', 16.99 );

 menu.addDishToCourse('desserts', 'Ice Cream Sundae', 9.79 );

 menu.addDishToCourse('desserts', 'Mochi Sampler', 11.99 );

 menu.addDishToCourse('desserts', 'Cherry Pie Slice', 5.99 );

 

var meal = menu.generateRandomMeal();
console.log(meal);
