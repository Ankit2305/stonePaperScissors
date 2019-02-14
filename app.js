const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.use('/style', express.static('views/style'));
app.use('/script', express.static('views/script'));

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(3000);