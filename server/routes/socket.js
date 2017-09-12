const chat = require('../models/chat')
const room = require('../models/room')

module.exports = (io) => {

    io.on('connection', socket => {

        let currentRoomId

        const emit = (type, payload) => socket.emit('action', { type, payload });
        const broadcast = (type, payload) => io.sockets.emit('action', { type, payload });        
        const broadcastExceptMe = (type, payload) => socket.broadcast.emit('action', { type, payload });
        const broadcastTo = (roomId, type, payload) => socket.broadcast.to(`${roomId}`).emit('action', { type, payload });        
        
            socket.on('action', event => {

                switch(event.type) {

                    case 'server/SUBSCRIBE_TO_ROOM':
                        socket.leave(currentRoomId)
                        currentRoomId = event.payload.roomId
                        socket.join(`${currentRoomId}`);
                    break

                    case 'server/NEW_ROOM':

                        room.create(event.payload, (err, rows) => {
                            if (err) {
                                //emit('send:message', null) //todo error emit
                            } else {
                                broadcast(
                                    "NEW_ROOM",
                                    {
                                        id: rows.insertId, 
                                        name: event.payload.roomName,
                                    }
                                )
                            }
                        })
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