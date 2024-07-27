const { Square, Triangle, Circle } = require("./shapes");

class SVG{
    constructor(){
        this.elements =['<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
                        '',
                        '',
                        '',
                        '',
                        '</svg>'
                       ]
    }
    setText(text,color){
        if(text.length>3){
            throw new Error('Text must not exceed 3 characters.');
        }
        this.elements[2] = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">`;
        this.elements[3] = text;
        this.elements[4] = '</text>';
    }

    setShape(shape){
        this.elements[1] = shape.render();
    }
    render(){
        let str ='';
        for(let i=0;i<6;i++){
            str +=this.elements[i];
        }
        return str;
    }

}

module.exports = SVG;