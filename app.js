const express = require('express')


const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json(
        'Hello World'
    )
})

app.listen(PORT, () => {
    console.log(`Server is runnin on PORT ${PORT}`)
})