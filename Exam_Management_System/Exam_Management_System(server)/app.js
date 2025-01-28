const express = require('express');
const dbConnector = require('./config/db');
const examRoute = require('./routers/examQuestion.Routes');
const categoryRoute = require('./routers/category.Routes');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3040 ;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.get("",(req,res)=>{
    res.send({"msg":"I Am On Here !"});
});

app.use("/exam",examRoute);
app.use("/examCategory",categoryRoute);

app.listen(port , ()=>{
    console.log(`Server Is listening on http://localhost:${port}/`);
    dbConnector();
});