const chat = require('../models/chat')

module.exports = (io) => {

    io.on('connection', socket => {

        console.log("a user connected")

        const emit = (type, payload) => socket.emit('action', { type, payload });
        const broadcast = (type, payload) => io.emit('action', { type, payload });
        
            socket.on('action', event => {
        
                console.log(`event received ${event.type}`)

                switch(event.type) {

                    case 'server/NEW_MESSAGE':

                    console.log("here1");

                    chat.create(event.payload.message_text, (err, rows) => {
                        if (err) {
                            console.log("here2");                            
                            //emit('send:message', null) //todo error emit
                        } else {
                            console.log("here3");                                                        
                            broadcast(
                                "NEW_MESSAGE",  //todo isSaved flag?
                                {
                                    id: rows.insertId, 
                                    message_text: event.payload.message_text
                                }
                            )
                        }
                    })

                    break

                    default: break

                }
        
            })

    })

}