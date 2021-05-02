const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const env = require('dotenv');
const cookieParser = require('cookie-parser');

// Environemt variable configure
env.config();

// Routes
const authRoutes = require('./routes/auth');
const queryRoutes = require('./routes/query');
const newsletterRoutes = require('./routes/newsletter');

// Databse Connect
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.qceio.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("Database Connected!!")
    })
    .catch((err) => {
        console.log(`Failed to connect to Database, Error:${err}`)
    })

// Route Setups
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api',queryRoutes);
app.use('/api',newsletterRoutes);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {

    // app.use(
    //     expressStaticGzip(path.resolve(__dirname, 'client','build'), {
    //     enableBrotli: true, // only if you have brotli files too
    //     }),
    //   );

    // Set static folder
    app.use(express.static('client/build'));

    app.get('*.js', function (req, res, next) {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
      });

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

const port = process.env.PORT || 4000;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})