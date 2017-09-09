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

exports.list = (req, res) => {
    chat.getAll( (err, data) => {
        if (err) {
            res.status(500).send({'error': true, 'message': err})          
        } else {
            res.send({'rooms': data})
        }
    })
}