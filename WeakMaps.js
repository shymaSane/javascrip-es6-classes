// to implement private properties and methods
// weakmaps is dictionarys were keys are objects and values can be anything
//if there is no refernce to these keys, it ll be garbage collected 
//A WeakMap is a map (dictionary) where the keys are weak - that is, if all references to the key are lost and there are no more references to the value - the value can be garbage collected

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle{
    constructor(radius){
        //remember it takes object as a key 
        _radius.set(this, radius)
        _move.set(this, () => {
            console.log('move!!!', this)
        })
    }
    //how to show the value
    draw(){
        console.log(_radius.get(this))
        //this in the move function ll be undefined, its a weakm
        _move.get(this)()
    }
    
}

const c = new Circle(1)