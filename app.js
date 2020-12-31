
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

    function Human (name,feet, inches, weight, diet){
        return {
            name: name, 
            feet: feet,
            inches: inches, 
            weight: weight, 
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
        //console.log(dinosaurs); 
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
    let diet;
        document.getElementById('submit').addEventListener('click', function(event){
            event.preventDefault();
            const form = document.querySelector('form');
            name = form.elements.name.value; 
            feet = form.elements.feet.value; 
            inches = form.elements.inches.value;
            weight = form.elements.weight.value; 
            diet = form.elements.diet.value;
        })
        return {
            getData: function(){
          newHuman = Human(name, feet, inches, weight, diet);
          return newHuman
            }
        }
    })();
    //randomly select a compare method to output display to tiles; randomly select 

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    //logic when their diet matches each other and don't 
    const compareHelper = function(method){
        let h = human.getData(); 
        let d = dinosaurs;
        console.log(d);
        console.log(h);
    }

    const rSelectHelper = function(){
        console.log('i am a helper')
    }

    const compareMethods = {
        weight: function(){
            if (human.weight > dino.weight){
                return 'you weight more than this dinosaur'
            }
            if(human.weight < dino.weight){
                return 'you weight less than this dinosaur'
            }
            else{
                return 'you weight as much as this dinosaur'
            }
        },
        height: function(){
            if (human.height > dino.height){
                return 'you are taller than this dinosaur'
            }
            if(human.height < dino.height){
                return 'you are shorter than this dinosaur'
            }
            else{
                return 'you are as tall as this dinosaur'
            }
        },
        diet: function(){
            return (human.diet === dino.diet?  'you and dino have same diet': 'you have different diets')
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    //facts, open ended; if strings match, say  both ; if don't say both; submethods for specific details
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    //comparing numeric values; a method for each type; sub-methdos for which is larger 

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic


//use npx serve in root folder to  be able to run fetch on json file



