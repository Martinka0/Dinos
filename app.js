


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
      
      if (humanHeight > dinoHeight) {
      return `The ${this.species} is smaller + ${difference} + then ${human.name}.`;
     
      } else if (dinoHeight < humanHeight) {
      return `The ${this.species} heights is + ${difference} + less then ${human.name}.`;  
      } else {
       return `the ${this.species} height is the same as ${human.name}`; 
       
      }
    };
    
// Create Dino Compare Method 3

Dino.prototype.weight = function (){
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
  const human = getHumanData();
  human = {};
 
  human.name = document.getElementById('name').value;
  human.height = (document.getElementById('feet').value * 12 ) + document.getElementById('inches').value;
  human.weight = document.getElementById('weight').value;
  human.diet = document.getElementById('diet').value;

  console.log(human);
  return human
}

  // Use IIFE to get human data from form   

  const getDinos = async () => {
    const fetchedData = await fetch ("./dino.json");
    const data = await fetchedData.json();
    return data};

const button = document.getElementById('btn');
button.addEventListener("click", (event)=>{
  listener.event.preventDefault();
  
  
  // Move everything here, as it should be executed after the promise is resolved.
  const createDinos = async () => {
    const dinos = await getDinos();
    // getHumanData already returns a human object
    // so you don't need the IIFE above.
    // (don't forget to declare human as const inside getHumanData)
    const human = getHumanData();
    // Instead of mapping through dinos.Dinos straight away,
    // you need to add the human before doing it and create
    // the Dino instances.
    // And for a cleaner code, I would add that to a variable (like dinoList).
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
    // Add the human to the dinos array
    dinoList.splice(4, 0, human);
    // Since you are not storing a copy of the dinos array,
    // you should use forEach here.
    dinoList.forEach((dino) => {
      // Pass human here as parameter to use it later
      generateUi(dino, human);
    });
    removeForm();
  };
  createDinos();
});


  
     
// Generate Tiles for each Dino in Array

  const generateUi = (dino, human) => {
    const grid = document.querySelector("#grid");
    const head = document.createElement("h3");
    const image = document.createElement("img");
    const fact = document.createElement("p");
    
    // If dino has a name, it is a human and we want to display it.
    head.textContent = dino.name || dino.species;
    
    // Now, if dino does not have species, it is a human.
    // Or you could add 'human' as a 'species' property to
    // the human object.
    image.src = `./images/${dino.species || "human"}.png`;
    // Only show fact if the dino has one.
    if (dino.fact) {
      fact.textContent = dino.fact;
    }
    const newTile = document.createElement("div");
    newTile.className = "grid-item";
    // The elements should be appended to the tile
    // and not the grid.
    newTile.appendChild(head);
    newTile.appendChild(image);
    newTile.appendChild(fact);
    // Then you append the tile to the grid.
    grid.appendChild(newTile);
  };

    // Remove form from screen
dinoCompare = document.getElementById('dino-compare');
   function removeForm() {
  dinoCompare.style.display = "none";
}