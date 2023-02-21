const express = require('express');
const bodyParser = require('body-parser');
const emailController=require('./controller/emailController')
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.render('index',{info:''});
})
app.post('/verifysingle',emailController.validateEmail)

port=process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})