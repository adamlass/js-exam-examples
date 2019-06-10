//simple function closure
var add = (function () {
    var counter = 0;
    return function () { counter += 1; return counter }
})()

add()
add()
console.log(add())


//return as object with methods
var obj = (function () {
    let name = "Johnny"
    return {
        getName() {
            return name
        },
        setName(newName) {
            name = newName
        }
    }
})()

console.log(obj.getName())
obj.setName("Tim")
console.log(obj.getName())