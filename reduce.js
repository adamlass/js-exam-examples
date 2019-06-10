const names = ["Adam", "Julie", "Amanda", "Frank", "Esther"]

const firstLetters = names.reduce((acc, name) => acc + name[0], "")

console.log(firstLetters)