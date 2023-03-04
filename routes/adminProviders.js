var express = require('express');
var router = express.Router();
const mysql = require('mysql')


const conectBD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'marketplace'
})

/* GET home page. */
router.get('/', (req, res, next) => {
    const {user, password} = req.body
    const values = [user, password]
    const sql = 'select * from providers'

    conectBD.query(sql, values,(err,result) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if (result.length > 0) {
                res.status(200).send(result)
            } else {
                res.status(400).send('No hay proveedores registrados.')
            }
        }
    })
});

module.exports = router;
