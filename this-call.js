function hello(){
    console.log("hello", this.name)
}

hello()

const obj = {
    name: "Tim"
}

hello.call(obj)
