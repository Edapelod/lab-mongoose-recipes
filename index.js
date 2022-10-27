const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';


//recipe
// const newRecipe1 = {
//   title: "pizza",
//   level: "Easy Peasy" ,
//   ingredients: "cheese",
//   cuisine: "italian",
//   dishType: "main_course",
//   duration: 30,
//   creator:  "Juan",
// }

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    // const hola = Recipe.create(newRecipe1);
    // return hola
    const allRecipes1 = Recipe.insertMany(data)
    return allRecipes1
  })
  .then (() => {
    const Ron = Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: "100"},
      {new:true
      })
      console.log("wuhu")
      return Ron
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
