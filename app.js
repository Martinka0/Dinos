
    //var declarations are globally scoped or function scoped 
    //while let and const are block scoped. 
    //var variables can be updated and re-declared within its scope; 
    //let variables can be updated but not re-declared; 
    //const variables can neither be updated nor re-declared. 
    //They are all hoisted to the top of their scope.
    // 2. Decide how you will work with classes, then build out your classes and objects.
 



//On form submit: hide the form and show the grid (you can get their ids from the HTML code). 
//'display: none;' is a good CSS property to use here.
//On form submit: loop through the dinos list and create an instance of the constructor/class for each entry. 
//It will be used to create the tiles later. Log that new list.
//On form submit: get the data from the form. There is a number of ways to do it, 
//but every input has an id and makes it easier to use getElementById.
//There, the first part (getting the data) is ready. Now you need to create compare 
// //functions and build the tiles. 



//Create a Dino construtor or class.
function Dino(species, height, weight, diet, where, when, fact, img) {
  this.species = species;
  this.height = height;
  this.weight = weight;
  this.where = where;
  this.diet = diet;
  this.when = when;
  this.fact = fact;
  this.img = img;
};
Dino.prototype.dietCompare = function(){
  if (human.diet === this.diet){
      return `${this.species} was a ${this.diet}. You two could share dinner.`;
  } else if (this.diet === "carnivor"){
      return `${this.species} was a ${this.diet}. Better run before you become the meal.`;
  } else if (this.diet === "herbavor"){
      return `${this.species} was a ${this.diet}. You'll have to prepare an extra salad for dinner.`;
  } else {
      return `${this.species} was a ${this.diet}. Time to suggest a potluck.`;
  }
}
 
// Create Dino Compare Method 2
    Dino.prototype.height = function (){
      const humanHeight = human.height;
      const dinoHeight = this.height;
      const difference = Math.abc(dinoHeight - humanHeight); 
      
      if (humanWeight > dinoWeight) {
      return `The ${this.species} weighs + ${difference} + more then ${human.name}.`;
     
      } else if (dinoWeight < humanWeight) {
      return `The ${this.species} weighs + ${difference} + less then ${human.name}.`;  
      } else {
       return `the ${this.species} weighs the same as ${human.name}`; 
       
      }
    };
    
    // Create Dino Compare Method 3

    Dino.prototype.diet = function () {
      const humanDiet = human.diet;
      const dinoDiet = this.diet;
      if (humanDiet === dinoDiet) {
        return `${this.species} likes to eat the same things as ${human.name}.`
      } else {
        return `${this.species} was a ${this.diet}.`
      }
      };

  // https://knowledge.udacity.com/questions/542357
    
// Create Dino Objects
//add a randomFact method in the Dino constructor 
Dino.prototype.randomInfo = function (item) {
  const info = ['weigt', 'height', 'diet', 'fact'];
  const randomNumber = Math.floor(Math.random() * Math.floor(info.length));
  return this[info[randomNumber]](item);
};

// let dinos = [];
// fetch("./dino.json")
//   .then((res) => res.json())
//   .then((data) => {
//     //if (data.Dinos !== Array) {
//       console.log(typeof data.Dinos);
//    // }
    
//     dinos = data.Dinos;
//     console.log(dinos);
//   getDinos(dinos);
//   });
// function getDinos(ds) {
  
//   ds.map((dino) => console.log(dino));
// };

//const human = new Human();
function getHumanData(){
  human={};
  human.name = document.getElementById('name').value;
  human.height = (document.getElementById('feet').value * 12) + document.getElementById('inches').value;
  human.weight = document.getElementById('weight').value;
  human.diet = document.getElementById('diet').value;
  console.log(human);
  return human
}

  // Use IIFE to get human data from form   
const button = document.getElementById('btn');
button.addEventListener("click", (event)=>{
  const getDinos = async () => {
    const fetchedData = await fetch ("./dino.json");
    const data = await fetchedData.json();
    return data;
  };
  const createDinos = async () => {
    const dinos = await getDinos();
    {
  
 //uncought referrence in promise
 data.map((dino) => console.log(dino));
    };
    }; 
  
  createDinos();
  event.preventDefault();
  console.log("working!!")
  //getHumanData();
  //displayInfographic();
  removeForm();
});    

// Generate Tiles for each Dino in Array

//  function = displayInfographic () {
//  let dinos = getDinos();
//  const human = getHumanData();

//  }
//     const grid = document.querySelector('grid');
  
//     const cell = document.createElement('div');

//     cell.className = 'grid-item';
// // 
//     const dinoTile = document.createElement('p');
//     dinoTile.textContent = '?';
    


//     // Add tiles to DOM

//     grid.appendChild(dinoTile);


    // Remove form from screen
dinoCompare = document.getElementById('dino-compare');
function removeForm() {
  dinoCompare.style.display = "none";
}

// On button click, prepare and display  infographic