

function getRandom(add) {
    return new Promise((resolve, reject) => {

        let randomNumber = Math.floor(Math.random() * 100 + add)
        console.log(randomNumber)
        if (randomNumber % 2 == 0) {
            resolve(randomNumber)
        } else {
            reject(randomNumber)
        }
    })
}


async function run() {
    try {
        let randomNumber = await getRandom(12)
        console.log("success", randomNumber)
    } catch (err) {
        console.log('error', err)
    }
}

run()