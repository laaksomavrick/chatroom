const express = require('express')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)


const socket = require('./server/routes/socket');
const routes = require('./server/routes/routes')
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

io.sockets.on('connection', socket)

// io.on('connection', function (socket) {
//     console.log("a user connected")

//     socket.on('event', function(data) {
//         console.log("event")
//         console.log(data)
//     })

// })
