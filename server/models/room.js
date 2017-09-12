const database = require('../database')

exports.create = (payload, callback) => {
    //todo need to sanitize input
    database.get().query(`INSERT INTO rooms (name) VALUES ('${payload.roomName}');`, (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}