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

exports.create = (text, callback) => {
    //todo need to sanitize input
    database.get().query(`INSERT INTO messages (message_text) VALUES ('${text}');`, (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}
