const { Router} = require('express')
const pool = require('../db')
const router = Router()

router.get('/', (request ,response, next) => {
    pool.query('SELECT * FROM userprofile', (err, res) => {
        if(err) return next(err)
    
        response.json(res.rows)
    })
})

module.exports = router