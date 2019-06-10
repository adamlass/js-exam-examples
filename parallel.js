const fetch = require("node-fetch")
URL = "https://swapi.co/api/people/"

function fetchPerson(url) {
    return fetch(url)
    .then(data => data.json())
    .then(data => data)
}

async function printNames() {
    promises = []
    promises.push(fetchPerson(URL +1))
    promises.push(fetchPerson(URL +2))
    
    var allData = await Promise.all(promises)
    console.log(allData.map(p => p.name))
}

printNames()