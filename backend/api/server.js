// IMPORTS
    const express = require('express')

// ROUTERS

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: 'WEB_DB_3 is WORKING!'})
    })

// INDIVIDUAL ROUTES

// EXPORTS
module.exports = server