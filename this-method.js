let obj = {
    name: "Tim",
    print(){
        console.log('Name is', this.name)
    }
}

obj.print()