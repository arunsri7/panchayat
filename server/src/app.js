const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const postRoutes = require('./routes/post_routes.js');


require('dotenv').config();

const middlewares = require('./middlewares');

const app = express();

const connectionURL = "mongodb+srv://admin:admin123@cluster0.vtyuz.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
mongoose.set("useFindAndModify", false);

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

// app.use('/', postRoutes);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
