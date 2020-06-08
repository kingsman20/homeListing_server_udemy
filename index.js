const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const houses = require('./routes/houses');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the house listing API');
});

app.use('/api/houses', houses);

require('dotenv').config();

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://kingslife_node_react-native_1:DROP92qoHBR2yG4W@cluster0-shard-00-00-2f3l4.mongodb.net:27017,cluster0-shard-00-01-2f3l4.mongodb.net:27017,cluster0-shard-00-02-2f3l4.mongodb.net:27017/house_app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(result => {
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    })
    .catch(err => console.log(err))
