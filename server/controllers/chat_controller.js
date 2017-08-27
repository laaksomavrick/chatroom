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

exports.create = (req, res) => {
    const text = req.body.text

    if (text === null || text === undefined) {
        res.status(500).send({'error': true, 'message': 'text cannot be undefined'})                  
    }

    chat.create(text, (err, rows) => {
        if (err) {
            res.status(500).send({'error': true, 'message': err})          
        } else {
            res.send({id: rows.insertId, 'message_text':text})
        }
    })
}