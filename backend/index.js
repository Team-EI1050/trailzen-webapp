let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoDb = require('./database/db');

const createError = require('http-errors');
let mockSenderista = require('./mocks/mock.senderista');
let mockGestor = require('./mocks/mock.gestor');
let mockRuta = require('./mocks/mock.ruta');


// Conexión a la base de datos
mongoose.Promise = global.Promise;

mongoose.connect(mongoDb.db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {

  console.log('Base de datos online');
  
  mockSenderista.addMock()
  mockGestor.addMock()
  mockRuta.addMock()

  //mongoose.connection.db.dropDatabase();
   
}, error => {
    console.log('Error en la base de datos: ' + error)
  }
)

// Preparando senderista

const senderistaRoute = require('./routes/senderista.routes');
const gestorRoute = require('./routes/gestor.routes');
const rutaRoute = require('./routes/ruta.routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/backend')));


// API root
app.use('/senderista', senderistaRoute)
app.use('/gestor', gestorRoute)
app.use('/ruta', rutaRoute)

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
  
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/backend/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});