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

exports.create = (payload, callback) => {
    //todo need to sanitize input
    database.get().query(`INSERT INTO messages (username, message) VALUES ('${payload.username}','${payload.message}');`, (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}
