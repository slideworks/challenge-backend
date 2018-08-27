const app = require('express')(require('morgan')('dev'))
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const RateLimit = require('express-rate-limit')

const routes = require('./routes/index')
const BlockedController = require('./controllers/block.controller')
const Blocked = new BlockedController

const limit = new RateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
  onLimitReached: Blocked.block
})

app.enable('trusty proxy')
app.use(limit)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/', routes)

app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.json('error')
})

app.listen(3000, '127.0.0.1', () => {
  console.log('Running on localhost:3000!')
})
