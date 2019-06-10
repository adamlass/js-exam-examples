const fetch = require("node-fetch")
URL = "https://swapi.co/api/people/"

function fetchPerson(url) {
    return fetch(url)
        .then(data => data.json())
        .then(data => data)
}

async function printNames() {
    var person1 = await fetchPerson(URL + 1);
    console.log('first:', person1.name)
    var person2 = await fetchPerson(URL + 2);
    console.log('second:', person2.name)

}
printNames()