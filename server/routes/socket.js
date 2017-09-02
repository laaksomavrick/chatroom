const chat = require('../models/chat')

module.exports = (io) => {

    io.on('connection', socket => {

        const emit = (type, payload) => socket.emit('action', { type, payload });
        const broadcast = (type, payload) => socket.broadcast.emit('action', { type, payload });
        
            socket.on('action', event => {
        
                switch(event.type) {

                    case 'server/NEW_MESSAGE':

                    console.log("here1");

                    chat.create(event.payload, (err, rows) => {
                        if (err) {
                            console.log("here2");                            
                            //emit('send:message', null) //todo error emit
                        } else {
                            console.log("here3");
                                broadcast(
                                    "NEW_MESSAGE",  //todo isSaved flag?
                                    {
                                        id: rows.insertId, 
                                        message: event.payload.message,
                                        username: event.payload.username
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