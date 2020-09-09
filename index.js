const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hyoseok:k1k1k1k1@boilerplate.bnnu4.mongodb.net/<dbname>?retryWrites=true&w=majority',{
     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log("MongoDB connected..."))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
