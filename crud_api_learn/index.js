const express = require('express');
const app = express();

app.listen(3000, () => { //needed to run the app
    console.log('server is running on http://localhost:3000');
})

app.get('/', (req, res) =>{
    res.send("hello from nod api")
})