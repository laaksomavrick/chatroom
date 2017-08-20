const express = require('express')
const app = express()
const routes = require('./server/routes')
const database = require('./server/database')

app.use('/api/v1', routes);

database.connect( (err) => {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        app.listen(3001, () => {
            console.log('Listening on port 3001...');
        })
    }
})
