const express = require('express')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
    res.status(200) 

}) 

app.listen(PORT, () => {
    console.log("Сервер запущен.\n" + `http://localhost:${PORT}`)
})