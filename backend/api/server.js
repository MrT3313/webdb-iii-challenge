// IMPORTS
    const express = require('express')

// ROUTERS
    const cohortsRouter = require('./cohortsRouter')
    // const studentsRouter = require('./studentsRouter')

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req,res) => {
        res.json({message: 'WEB_DB_3 is WORKING!'})
    })

// INDIVIDUAL ROUTES
    server.use('./api/cohorts', cohortsRouter)
    // server.use('./api/students', studentsRouter)

// EXPORTS
module.exports = server