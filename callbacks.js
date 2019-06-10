function myMap(arr, callback) {
    let res = []
    for (const x of arr) {
        res.push(callback(x))
    }
    return res
}

const cb = x => x.toLowerCase()

let arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
console.log(myMap(arr, cb))

