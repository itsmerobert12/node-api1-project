const express = require('express')
const Users = require('./users/model')
const server = express()

server.use(express.json())

server.post('/api/users', async (req,res) => {
    console.log(req.body)
    try{
        const { name , bio } = req.body
        if(!name || !bio) {
            res.status(400).json({message: "Please provide name and bio for the user"})
        } else {
            const newUser = await Users.insert({name,bio})
            res.status(201).json(newUser)
        }
    } catch(err) {
        res.status(500).json({message: "There was an error while saving the user to the database"})
    }
})

