//Bring in dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

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
        message:'Enter color name or hexidecimal value with hashtag',
        name: 'color',
    },
    {  
        type: 'list',
        message:'What shape would you like',
        name: 'shape',
        choices: ['circle','triangle','square']
    }
]

function makeLogo(data){

}

function outPutLogo(picture){

}


function init(){
    inquirer
        .prompt(questions)
        .then((answers)=>{
            makeLogo(answers);
        })
}

init();