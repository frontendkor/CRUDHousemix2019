const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4000;

// mongoose.connect("mongodb://localhost/persons-db", {useNewUrlParser: true});
mongoose.connect("mongodb+srv://housemix:admin@cluster0.vpnlp.mongodb.net/housemix?retryWrites=true&w=majority", {useNewUrlParser: true}).then(() => {
    console.log("CONNECT DB !");
}).catch((err) => {console.log(err);})

app.use(bodyParser.json());
app.use("/housemix/", require("./api"));

app.listen(PORT, () => {
    console.log('START SEVER !');
});