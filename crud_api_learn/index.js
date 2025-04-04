const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require("./routes/product.route.js")
const app = express();

//middleware
app.use(express.json()) //needed for configuration from json, part of init

//routes
app.use("/api/products", productRoutes)

//testing
app.get('/', (req, res) =>{
    res.send("hello from node api")
})

async function main() {
    await mongoose.connect('mongodb+srv://riddhimaroy10:create_password@backenddb.hkf4fck.mongodb.net/Crud_API_Learn?retryWrites=true&w=majority&appName=BackendDB');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
  
main()
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => { //needed to run the app
        console.log('server is running on http://localhost:3000');
    })
})
.catch((err) => {
    console.log("Connection failed:", err);
});