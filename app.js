const express = require('express')
const app = express()

// Application
app.get('/', (req, res) => { // Request and response
    res.send("The app ist working.")
})

// When user visits /about, show the text "Welcome"
app.get('/about', (req, res) => { // Request and response
    res.send("Willkommen!")
})

app.get('/:something', (req, res) => {
    let something = req.params.something
    res.send(`Looks like you're looking for ${something}`)
})

const data = {
    animals: [{
        name: "whale",
        location: "ocean",
        noOfLegs: 0
    },
    {
        name: "bee",
        location: "hive",
        noOfLegs: 6
    },
    {
        name: "duck",
        location: "pond",
        noOfLegs: 2
    },
    {
        name: "cow",
        location: "farm",
        noOfLegs: 4
    }]
}

// Create a route handler for the endpoint /animals/<animal name> that sends the desc of the given animal to the browser.
// If no animal with that name exists, it should send the message "Error, no animal"

app.get('/animals/:name', (req,res) => {
    let animal = data.animals.find(element => element.name == req.params.name)
    if (animal)
        res.send(`A/an ${animal.name} has ${animal.noOfLegs} legs and it stays in a/the ${animal.location}`)
    else
        res.status(404).send(`Error, no animal`)
})

const server = app.listen(8080, ()=>{
    console.log("Server is ready. on 8080. That rhymes!")
})