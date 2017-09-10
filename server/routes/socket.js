const chat = require('../models/chat')

module.exports = (io) => {

    io.on('connection', socket => {

        let currentRoomId

        const emit = (type, payload) => socket.emit('action', { type, payload });
        const broadcast = (type, payload) => socket.broadcast.emit('action', { type, payload });
        const broadcastTo = (roomId, type, payload) => socket.broadcast.to(`${roomId}`).emit('action', { type, payload });        
        
            socket.on('action', event => {

                switch(event.type) {

                    case 'server/SUBSCRIBE_TO_ROOM':
                        socket.leave(currentRoomId)
                        currentRoomId = event.payload.roomId
                        socket.join(`${currentRoomId}`);
                    break

                    case 'server/NEW_MESSAGE':
                        chat.create(event.payload, (err, rows) => {
                            if (err) {
                                //emit('send:message', null) //todo error emit
                            } else {
                                broadcastTo(
                                    event.payload.roomId,
                                    "NEW_MESSAGE",
                                    {
                                        id: rows.insertId, 
                                        message: event.payload.message,
                                        username: event.payload.username,
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