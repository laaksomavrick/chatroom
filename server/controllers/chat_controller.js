const chat = require('../models/chat');

exports.index = (req, res) => {

    chat.get( (err, rows) => {

        if (err) {
            res.send({'error':err})          
        } else {
            res.send({'messages':rows})
        }

    })
    
};