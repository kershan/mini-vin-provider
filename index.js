const express = require('express')
const app = express()
const func = require('./function/index.js')

app.get('/', (req, res) => func.vinprovider(req, res))

app.listen(3000, () => console.log('Example app listening on port 3000!'))