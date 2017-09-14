const mysql = require('mysql')
const config = require('../env')


let state = {
    pool: null,
}

exports.connect = (callback) => {
    state.pool = mysql.createPool({
        host: config.DATABASE_HOST,
        user: config.DATABASE_USER,
        password: config.DATABASE_PASSWORD,
        database: config.DATABASE_NAME
    })
    callback()
}

exports.get = () => {
    return state.pool
}