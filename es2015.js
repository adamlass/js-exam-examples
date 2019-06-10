//let
// x = 3 //let is non-hoisted

let x = 3

//arrow function
let arrow = (a, b) => a + b

arrow = (a, b) => {
    return a + b
}

(() => console.log(this))()


//this
let obj = {
    name: "Tim",
    print() {
        console.log('Name is', this.name)
    }
}

obj.print()


//Rest parameters
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))


//Destructing assignments with List
list = [1,2,3,4]

let [indexZero] = list


//Destructing assignments with Objects

let me = {name:"Adam", phone:"12345678"}

let {name} = me


//Sets
const set1 = new Set([1, 2, 3, 4, 5, 5])
console.log('set', set1)

//Maps
let map = new Map([[11, "Johannes"],[12, "Said"]])
console.log("map get 12: ", map.get(12))
console.log("map delete 11: ", map.delete(11))
console.log("map has 11: ", map.has(11))

