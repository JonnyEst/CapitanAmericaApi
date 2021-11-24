const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors')

const routes = require('./routes')
const bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 3200);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'captain'
}

//midedlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// Route
app.get('/', (req, res) =>{
    res.send('Welcome to my api')
})
app.use('/api', routes)

//Check connect
app.listen(app.get('port'), () => {
    console.log('server running on port ', app.get('port'))
})
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));