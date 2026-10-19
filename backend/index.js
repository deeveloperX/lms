const db = require('./connection');
const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())

db;

app.get("/", (req, res) => {
    res.send("API Fetched Successfully👍 ")
})

app.listen(6005)