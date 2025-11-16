const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes/authRoutes')

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

app.use('/user',router)

app.get('/', (req, res) => {
    res.json(
        'Hello World'
    )
})

mongoose
  .connect(
    `mongodb+srv://devzihadse_db_user:euRl6oa8E48UFtVB@clusterx.xbqw8mv.mongodb.net/?appName=ClusterX`
  )
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });