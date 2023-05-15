//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy",
// });

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 9,
//   review: "Great fruit!",
// });

// pineapple.save();

// // const mango = new Fruit({
// //   name: "Mango",
// //   rating: 6,
// //   review: "Decent fruit!",
// // });

// // mango.save();

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture",
// });

// Fruit.insertMany([kiwi, orange, banana])
//   .then(function () {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Person.updateOne({ name: "John" }, { favouriteFruit: mango })
//   .then(function () {
//     console.log("Successfully updated the document");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Person.deleteOne({ name: "Amy" })
//   .then(function () {
//     console.log("Successfully deleted the document");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

Fruit.find().then(function (fruits) {
  fruits.forEach(function (fruit) {
    console.log(fruit.name);
  });
});
