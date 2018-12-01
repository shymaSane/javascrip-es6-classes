//1- we use symbols to enable private proprties 
//2- nfortunately, they ended up being severely downgraded. They are no longer private, since you can find them via reflection, for example, using Object.getOwnPropertySymbols or proxies.
//3- Each possible Symbol values is unique and immutable.
//4- symbol is primitive type
//5- symbol is a unique identifier Symbol() === Symbol() > false

const _radius = Symbol()
const _draw = Symbol()

class Circle{
    constructor(radius){
        this[_radius] = radius
    }

    [_draw](){
        console.log('drawing!!!!!')
    }
}

const c = new Circle(1)
// we can't directly enter this method, calling c.radius(1) wont work 
//but we have other ways
console.log(Object.getOwnPropertyNames(c)) //>>> this ll return empty array
console.log(Object.getOwnPropertySymbols(c)) // >> this ll return [Symbol()]