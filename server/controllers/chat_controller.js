const chat = require('../models/chat')

exports.index = (req, res) => {
    chat.get( (err, rows) => {
        if (err) {
            res.status(500).send({'error': true, 'message': err})          
        } else {
            res.send({'messages':rows})
        }
    })
}