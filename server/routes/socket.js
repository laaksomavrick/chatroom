module.exports = (socket) => {

    console.log("a user connected")

    socket.on('event', function(data) {
        console.log("event")
        console.log(data)
    })

}