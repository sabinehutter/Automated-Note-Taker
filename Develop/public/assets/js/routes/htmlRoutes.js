const fs = require('fs')
const path = require('path');




module.exports = function (app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../../index.html'));
        console.log(__dirname)
    })

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../../../notes.html'));
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../../index.html'))
    })
}