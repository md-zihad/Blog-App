const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.set('views', 'views')

const middlewares = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({extended: true}),
    express.json()
]

app.use(middlewares)

app.get('/', (req, res) => {
    res.json(
        'Hello World'
    )
})

app.listen(PORT, () => {
    console.log(`Server is runnin on PORT ${PORT}`)
})