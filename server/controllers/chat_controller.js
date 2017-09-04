const chat = require('../models/chat')

exports.index = (req, res) => {
    const id = req.params.id
    chat.get(id, (err, data) => {
        if (err) {
            res.status(500).send({'error': true, 'message': err})          
        } else {
            res.send({'room': data})
        }
    })
}