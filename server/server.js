const express = require("express")
const mongoose = require('mongoose')

const PORT = 5000
const mongoURL = 'mongodb+srv://bhawanrandunu:1234@projectmanagementdb.fuer2.mongodb.net/'

const app = express()

const UserRoute = require('./routes/UserRoute')

mongoose
    .connect(mongoURL)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err))

app.use('/', UserRoute)

app.listen(PORT, () => {
    console.log(`Sever is connected with port ${PORT}`);
    
})
