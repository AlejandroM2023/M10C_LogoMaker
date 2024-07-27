class SVG{
    constructor(){
        this.elements =['<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
                        '',
                        '',
                        '',
                        '',
                        '</svg>'
                       ]
    }
    setText(text,color){
        this.elements[2] = `<text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${color}"></text>`;
        this.elements[3] = text;
        this.elements[4] = '</text>';
    }

    setimage(shape){
        this.elements[2] = shape;
    }
    render(){
        let str ='';
        for(let i=0;i<6;i++){
            str +=this.elements[i];
        }
        return str;
    }

}