const express = require('express')
const app = express()
const routes = require('./server/routes')
const database = require('./server/database')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routes);

database.connect( (err) => {
    if (err) {
        process.exit(1)
    } else {
        app.listen(3001, () => {
            console.log('Listening on port 3001...');
        })
    }
})
