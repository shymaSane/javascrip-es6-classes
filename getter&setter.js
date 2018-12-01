//Object.defineProperty()
//ex:
//const object1 = {};

//Object.defineProperty(object1, 'property1', {
   // value: 42,
    //writable: false
  //});
  

const _radius = new WeakMap();

class Circle{
    constructor(radius){
        //remember it takes object as a key 
        _radius.set(this, radius)
    }
   
    get radius(){
        return _radius.get(this)
    }

    set radius(val){
        _radius.set(this, val)
    }
    
}

const c = new Circle(1)
//how to set new val
//c.radius = 10