const path = require('path');
const express = require('express');

const app = express();

const port = 3000

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'build/index.html'))
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})