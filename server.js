const express = require('express')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)


const routes = require('./server/routes')
const database = require('./server/database')
const socketServer =require('socket.io')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routes);

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

io.on('connection', function (socket) {
    console.log("a user connected")
})
