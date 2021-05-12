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

Dino.prototype.dietCompare = function (human) {
  if (human.diet === this.diet) {
    return `${this.species} was a ${this.diet}. You two could share dinner.`;
  }
  if (this.diet === "carnivor") {
    return `${this.species} was a ${this.diet}. Better run before you become the meal.`;
  }
  if (this.diet === "herbavor") {
    return `${this.species} was a ${this.diet}. You'll have to prepare an extra salad for dinner.`;
  }
  return `${this.species} was a ${this.diet}. Time to suggest a potluck.`;
};
 
// Create Dino Compare Method 2
    Dino.prototype.heightCompare = function (human){
      const humanHeight = human.height;
      const dinoHeight = this.height;
      const difference = Math.abs(dinoHeight - humanHeight); 
      
      if (humanHeight > dinoHeight) {
      return `The ${this.species} is  ${difference} inches smaller then ${human.name}.`;
     
      } if (dinoHeight > humanHeight) {
      return `The ${this.species} is  ${difference} inches taller then ${human.name}.`;  
      } 
       return `the ${this.species} height is the same as ${human.name}`; 
       
      
    };
    
// Create Dino Compare Method 3
Dino.prototype.weightCompare = function (human){
  const humanWeight = human.weight;
  const dinoWeight = this.weight;
  const difference = Math.abs(dinoWeight - humanWeight); 
  

if (humanWeight < dinoWeight) {
  return `The ${this.species} weighs ${difference} lbs more then ${human.name}.`;
 
  } if (dinoWeight < humanWeight) {
  return `The ${this.species} weighs  ${difference} lbs less then ${human.name}.`;  
  } 
   return `the ${this.species} weighs the same as ${human.name}`; 
   
};

    
// Create Dino Objects
//add a randomFact method in the Dino constructor 
Dino.prototype.randomInfo = function (human) {
  const info = ["weight", "height", "diet", "fact"];
  const randomNumber = Math.floor(Math.random() * (info.length -1));
  if (randomNumber < 3) {
    return this[info[randomNumber] + "Compare"](human);
  }
  
  return this[info[randomNumber]];
  
};

const human = {};
function getHumanData() {
 
  
  human.name = document.getElementById("name").value;
  human.height = (document.getElementById("feet").value * 12) + document.getElementById("inches").value;
  human.weight = document.getElementById("weight").value;
  human.diet = document.getElementById("diet").value;

  console.log(human);
  return human
};

  // Use IIFE to get human data from form   
  const getDinos = async () => {
    const fetchedData = await fetch("./dino.json");
    const data = await fetchedData.json();
    return data;
  };
  const button = document.getElementById("btn");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const createDinos = async () => {
      const dinos = await getDinos();
      const human = getHumanData();
      const dinoList = dinos.Dinos.map((dino) => {
        return new Dino(
          dino.species,
          dino.height,
          dino.weight,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact
        );
      });
      dinoList.splice(4, 0, human);
      dinoList.forEach((dino) => {
        generateUi(dino, human);
      });
      
      removeForm();
    };
    createDinos();
  });
  




// Generate Tiles for each Dino in Array

const generateUi=(dino)=>{
   const grid = document.querySelector("#grid");
   const head = document.createElement("h3");
   const image = document.createElement("img");
   const fact = document.createElement("p");
    
    // If dino has a name, it is a human and we want to display it.
    head.textContent= dino.name || dino.species;
    // Now, if dino does not have species, it is a human.
    image.src=`./images/${dino.species || "human"}.png`;
    // Only show fact if the dino has one.
    if (dino.fact) {
      fact.textContent=dino.fact;
    }
  
    if (dino.fact) {
      fact.textContent = dino.randomInfo(human);
    }
   
   if (dino.species === "Pigeon") {
     fact.textContent = "All birds are Dinosaurs"; }

    
  // Add tiles to DOM
    const newTile = document.createElement("div");
    newTile.className = "grid-item";
    
    newTile.appendChild(head);
    newTile.appendChild(image);
    newTile.appendChild(fact);
    grid.appendChild(newTile);

  };
    // Remove form from screen
dinoCompare = document.getElementById("dino-compare");
   function removeForm() {
  dinoCompare.style.display = "none";
};