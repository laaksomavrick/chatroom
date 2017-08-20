const database = require('../database')

exports.get = (callback) => {
    database.get().query('SELECT * FROM messages', (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}
