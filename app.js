
    // Create Dino Constructor
    function Dino (species, weight, height, diet, where, when, fact){
        return {
            species:species,
            weight: weight, 
            height: height,
            diet: diet, 
            where: where,
            when: when,
            fact: fact     
        }
    }
    //created human constructor 
    function Human (name, height, weight, diet){
        return {
            name: name, 
            height: height,
            weigth: weight,
            diet: diet 
        }
    }

    // Create Dino Objects
    let url = "http://localhost:5000/dino.json";
    let dinosaurs;
    
    async function getDinoData(url){
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data);
        dinosaurs = data.Dinos.map(dino => Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact))
        console.log(dinosaurs); 
    }
    getDinoData(url);

    // Create Human Object
    // Use IIFE to get human data from form 
    let newHuman; 
    const human = (function (){
    let name; 
    let feet;
    let inches;
    let weight; 
    let height;
    let diet;
        document.getElementById('submit').addEventListener('click', function(event){
            event.preventDefault();
            const form = document.querySelector('form');
            name = form.elements.name.value; 
            feet = Number(form.elements.feet.value); 
            inches = Number(form.elements.inches.value);
            weight = Number(form.elements.weight.value); 
            diet = form.elements.diet.value;
            height = inches + (feet * 12);
        })
        return {
            getData: function(){
          newHuman = Human(name, height, weight, diet);
          console.log(newHuman);
          return newHuman
            
            }
        }
    })();
    //randomly select a compare method to output display to tiles; randomly select by array key

 

    const randomNumber = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

   

//compare methods, weight is in lbs, height in inches 
    const compareMethods = [
        {method: function(a,b){
                if (a > b){
                  
                    return 'you weight more than this dinosaur'
                }
                if(a < b){
                    return 'you weight less than this dinosaur'
                }
                else{
                    return 'you weight as much as this dinosaur'
                
                }
              }, 
              type: "weight",
              metric: "pounds"
        },
        {method: function(a,b){
            if (a > b){
                return 'you are taller than this dinosaur'
            }
            if(a < b){
                return 'you are shorter than this dinosaur'
            }
            else{
                return 'you are as tall as this dinosaur'
            }
         } ,
         type: 'height',
         metric: "inches"
        }, 
    
        {
        method: function(a,b){
            return (a === b ?  'you and dino have same diet': 'you have different diets')
            }, 
            type: 'diet'
        },   
    ]
    let newTiles; 
    function compare(a, human){
         newTiles = a.map(function(dino){
            let rng = randomNumber(0, compareMethods.length);
            let b = compareMethods[rng].method(human, dino);
            return b
        })
        console.log(newTiles)
    }

    function generateTiles(a){
        const grid = document.getElementById('grid'); 
        a.forEach(function(text){
            let tile = document.createElement('div');
            grid.appendChild(tile); 
            tile.textContent = text; 
        })
    }

function hideForm(){
    const form = document.querySelector('form');
    form.setAttribute("class", "hidden");
}    

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
//use npx serve in root folder to  be able to run fetch on json file

document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    human.getData();
    compare(dinosaurs, newHuman);
    generateTiles(newTiles); 
    hideForm();

})


