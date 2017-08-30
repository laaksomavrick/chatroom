const chat = require('../models/chat')

module.exports = (socket) => {

    console.log("a user connected")

    socket.on('send:message', (text) => {

        console.log('send:message received')

        chat.create(text, (err, rows) => {
            if (err) {
                io.sockets.emit('send:message', null)
            } else {
                io.sockets.emit(
                    'send:message', 
                    {
                        id: rows.insertId, 
                        message_text: text
                    }
                )
            }
        })

    })

}