const express = require('express')
const { port, dbURI } = require('./config/config')
const router = require('./routes/routes')
const { default: mongoose } = require('mongoose')
const cors = require('cors');
const app = express()

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}))
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.status(200).json('Home')
})
mongoose.connect(dbURI, {})
    .then((result) => {
        app.listen(port, () => console.log(`Listening to port ${port}`))
    })
    .catch((err) => {
        console.log(err);
    }
    )

