//Bring in dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require("./lib/shapes");
const colors = require('./lib/colors');
const SVG = require('./lib/svg');

const questions = [
    { 
        message:'Enter up to three letters for your logo(if more are entered they will be cutoff)',
        name: 'text',
        validate: function(input){
            const done = this.async();
            if(input.length >3){
                done('3 characters max');
                return false;
            }
            done (null,true);
        }
    },
    {  
        message:'Enter color name or hexidecimal value with or without the hashtag for the text color',
        name: 'textColor',
        validate: function(input){
            const hex = new RegExp('^#?([a-f0-9]{6}|[a-f0-9]{3})$');
            const done = this.async();
            if(!hex.test(input) && ! colors.includes(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())){
                done('Not a valid color name of hexidecimal value');
                return false;
            }
            done (null,true);
        }
    },
    {  
        type: 'list',
        message:'What shape would you like',
        name: 'shape',
        choices: ['circle','triangle','square']
    },
    {  
        message:'Enter color name or hexidecimal value with or without the hashtag for the shape color',
        name: 'shapeColor',
        validate: function(input){
            const hex = new RegExp('^#?([a-f0-9]{6}|[a-f0-9]{3})$');
            const done = this.async();
            if(!hex.test(input) && ! colors.includes(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())){
                done('Not a valid color name of hexidecimal value');
                return false;
            }
            done (null,true);
        }
    }
]

function makeLogo(data){
    const logo = new SVG();
    let shape;
    if(data.shape === 'triangle'){
        shape = new Triangle();
    }else if(data.shape === 'circle'){
        shape = new Circle();
    }else{
        shape = new Square();
    }
    shape.setColor(data.shapeColor);
    logo.setText(data.text,data.textColor);
    logo.setShape(shape);
    outPutLogo(logo);

}

function outPutLogo(logo){
    fs.writeFile('logo.svg', logo.render(), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg!')
      );
}


function init(){
    inquirer
        .prompt(questions)
        .then((answers)=>{
            makeLogo(answers);
        })
    
}

init();