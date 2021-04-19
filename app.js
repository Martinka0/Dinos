


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
// Create Dino Compare Method 1
Dino.prototype.dietCompare = function(humanDiet){
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
    Dino.prototype.height = function (humanHeight){
      const humanHeight = human.height;
      const dinoHeight = this.height;
      const difference = Math.abc(dinoHeight - humanHeight); 
      
      if (humanHeight > dinoHeight) {
      return `The ${this.species} is smaller + ${difference} + then ${human.name}.`;
     
      } else if (dinoHeight < humanHeight) {
      return `The ${this.species} heights is + ${difference} + less then ${human.name}.`;  
      } else {
       return `the ${this.species} height is the same as ${human.name}`; 
       
      }
    };
    
// Create Dino Compare Method 3

Dino.prototype.weight = function (humanWeight){
  const humanWeight = human.weight;
  const dinoWeight = this.weight;
  const difference = Math.abc(dinoWeight - humanWeight); 
  
  if (humanWeight > dinoWeight) {
  return `The ${this.species} weighs less + ${difference} + then ${human.name}.`;
 
  } else if (dinoWeight < humanWeight) {
  return `The ${this.species} weight + ${difference} + more then ${human.name}.`;  
  } else {
   return `the ${this.species} weighs the same as ${human.name}`; 
   
  }
};

  // https://knowledge.udacity.com/questions/542357
    
// Create Dino Objects
//add a randomFact method in the Dino constructor 
Dino.prototype.randomInfo = function (item) {
  const info = ['weigt', 'height', 'diet', 'fact'];
  const randomNumber = Math.floor(Math.random() * Math.floor(info.length));
  return this[info[randomNumber]](item);
  //console.log(item);
};


//const human = new Human();
function getHumanData(){
  human={};
  human.name = document.getElementById('name').value;
  human.height = (document.getElementById('feet').value * 12 ) + document.getElementById('inches').value;
  human.weight = document.getElementById('weight').value;
  human.diet = document.getElementById('diet').value;

  console.log(human);
  return human
}

  // Use IIFE to get human data from form   
  (function Human() {
    getHumanData();

  })();

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
  
 //uncought referrence in promise resolved : https://knowledge.udacity.com/questions/542357
 dinos.Dinos.map((dino) => {
    generateUi(dino)
    console.log(dino);
    
    
    });
    
    };
    }; 


  
  createDinos();
  
  event.preventDefault();
  console.log("working!!") 
  getHumanData(human);
  //dino.splice(4, 0,human);
  removeForm();
});    
// Generate Tiles for each Dino in Array

const generateUi=(dino)=>{
    const grid = document.querySelector('#grid');
    const head=document.createElement('h3');
    const image=document.createElement('img');
    const fact=document.createElement('p');
    //const randomInfo=document.createElement('p');
    head.textContent=dino.species;
    image.src=`./images/${dino.species}.png`;
    fact.textContent=dino.fact;

    
  // Add tiles to DOM
    const newTile = document.createElement('div');
    newTile.className = 'grid-item';
    grid.appendChild(newTile);
    grid.appendChild(head);
    grid.appendChild(image);
    grid.appendChild(fact);
    //grid.appendChild(randomInfo);
  }


    // Remove form from screen
dinoCompare = document.getElementById('dino-compare');
   function removeForm() {
  dinoCompare.style.display = "none";
}