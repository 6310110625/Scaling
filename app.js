const express = require('express')
const os = require('os')
const app = express()
const port = 6969

app.get('/', async(req, res) => {
    res.json({message: 'Response From', hostname: `${os.hostname}`}
    )
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))