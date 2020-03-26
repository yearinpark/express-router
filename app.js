const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const adminRoutes = require('./routes/admin');
//importing router object here from routes/admin.js & this router object in turn has these routes registered
//this router is actually a valid middleware function, we can take adminRoutes and just call as below
const shopRoutes = require('./routes/shop');

app.use(adminRoutes); //order matters. need to be above other app.use 
app.use(shopRoutes);

app.use(bodyParser.urlencoded({extended: false})); 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

