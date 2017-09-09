const database = require('../database')
const async = require('async');

exports.get = (id, callback) => {

    const roomQuery = `SELECT id, name FROM rooms WHERE id = ${id};`
    const messageQuery = `SELECT message, timestamp, username FROM messages WHERE room_id = ${id};`

    async.series([
        (next) => { doQuery(roomQuery, next) }, 
        (next) => { doQuery(messageQuery, next) }
    ], (err, data) => {
        if (err) { 
            callback(err, null)
        } else {

            const room = data[0][0]
            const messages = data[1]

            const response = {
                id: room.id,
                name: room.name,
                messages: messages.map(raw => { 
                    return { 
                            message:raw.message, 
                            timestamp: raw.timestamp, 
                            username:raw.username 
                        } 
                    }
                )
            }

            callback(null, response)     

        }
    })
}

exports.getAll = (callback) => {
    //todo need to sanitize input
    database.get().query('select * from rooms', (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}

exports.create = (payload, callback) => {
    //todo need to sanitize input
    database.get().query(`INSERT INTO messages (username, message, room_id) VALUES ('${payload.username}','${payload.message}', '${payload.roomId}');`, (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}

const doQuery = (query, callback) => { 
    database.get().query(query, (err, rows) => {
        if (err) { 
            callback(err, null)
        } else {
            callback(null, rows)            
        }
    })
}
