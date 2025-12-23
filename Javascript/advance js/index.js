class animal{
    constructor(){
        this.hands=2;
        this.legs=2;
    }
    eat(){
        console.log("Animal is eating");
    }
}

class kekda extends animal{
    constructor(){
        super(); 2
        this.hands=4;
        this.legs=4;
    }
}

let k1 = new kekda();


