class Animal {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}



class Ape extends Animal {

    constructor(name, numLice) {
        super(name);
        this.numLice = numLice
    }

    getName() {
        return 'The Apes name is: ' + super.getName();
    }

}

let ape = new Ape('Mario');

console.log(ape.getName())
