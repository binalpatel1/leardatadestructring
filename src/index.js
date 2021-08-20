import animals, { useAnimals } from "./data";
//[] use for destructuring of array
//console.log(animals);
const [cat, dog] = animals;
//console.log(cat);
//console.log(dog);

//destrucring arrays
//this is in courly breakets for destructuring "objects"
//const {name ,sound}= cat;//in constant the name should match the properties
//console.log(name);

//if you wan assin a nsame to your own
//const {name = "fluffy", sound="prrr"} = cat;
// //console.log(name);
//if object is nest and you wan print the thirt one
//const {name  ,sound,  foodRequre:{food,water}}=cat;

//console.lo(g(food);
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
