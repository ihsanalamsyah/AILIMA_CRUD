// server.js

// import express
const express = require('express');

// inisiasi express
const app = express();

// buat port
const port = 3000;

// middleware untuk membaca ejs
app.set('view engine', 'ejs');

// middleware untuk membaca data dalam bentuk json
app.use(express.json());

// middleware untuk membaca <form>
app.use(express.urlencoded({ extended: false }));

// import router
const router = require('./router');

// inisiasi router
app.use(router);

app.listen(port, ()=> {
    console.log(`Server nyala di localhost:${port}`)
})
