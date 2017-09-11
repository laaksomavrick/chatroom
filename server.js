//3rd party
const express = require('express')
const app = express()
const server = require('http').Server(app)
const bodyParser = require('body-parser');
const io = require('socket.io')(server)

//local
const socket = require('./server/routes/socket')(io)
const routes = require('./server/routes/routes')
const database = require('./server/database')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', routes);

//set up db + server
database.connect( err => {
    if (err) {
        console.log("Database failed")
        process.exit(1)
    } else {
        server.listen(3001, () => {
            console.log("Server started")
        })
    }
})
