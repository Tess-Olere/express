require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const employeeRouter = require('./routes/employeeRouter')
//configuring viee engine
app.set("view engine", "ejs");
//app.set('views', myViews);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(employeeRouter)
app.get('/create', (req, res) => {
    res.status(200).render("create")
})
//db connection

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}...`);
    })
}).catch((err) => {
    console.log(err);
});

//Nosql - sql - schema