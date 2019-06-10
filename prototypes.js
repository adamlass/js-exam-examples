let arr = ["a","b","c"]

console.log(arr.concat(["d", "e", "f"]))

Array.prototype.concat = () => console.log("Hello World")

arr.concat()
