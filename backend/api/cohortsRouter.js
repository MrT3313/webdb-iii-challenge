const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', async (req,res) => {
    console.log('cohortsRouter GET/')

    db('cohorts')
        .then( cohorts => {
            res.status(200).json(cohorts)
        })
        .catch( () => {
            res.status(500).json({ error: "GET api/cohorts --> could not get all cohorts"})
        })
})

// EXPORTS
module.exports = router