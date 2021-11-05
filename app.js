const express = require('express')
//const { initializeApp, cert } = require('firebase-admin/app');
const admin = require('firebase-admin');

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
