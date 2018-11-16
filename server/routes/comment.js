const { Router} = require('express')
const pool = require('../db')
const router = Router()


router.get('/', (request ,response, next) => {
    pool.query('SELECT * FROM comment ORDER BY id ASC', (err, res) => {
        if(err) return next(err)
    
        response.json(res.rows)
    })
})

router.post('/', (request, response, next) => {
    const {text} = request.body

    pool.query('INSERT INTO comment(text) VALUES($1)', 
    [text],
    (err, res) => {
        if(err) return next(err)

        response.redirect('/comment')
    }
    )
})

router.delete('/:id', (request, response, next) => {
    const {id} = request.params

    pool.query('DELETE FROM comment WHERE id=($1)', [id], (err, res) => {
        if(err) return next(err)

        response.redirect('/comment')
    })
})

module.exports = router