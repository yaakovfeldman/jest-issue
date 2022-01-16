const express = require('express')
const { initializeApp } = require('firebase/app');
//const admin = require('firebase-admin');

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
