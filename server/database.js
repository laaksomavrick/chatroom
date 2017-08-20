const mysql = require('mysql')

let state = {
    pool: null,
}

exports.connect = (callback) => {
    state.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'chatroom'
    })
    callback()
}

exports.get = () => {
    return state.pool
}