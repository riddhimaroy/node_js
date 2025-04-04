const Product = require('../models/product.model');

const getProd = async(req, res)=> {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error)
    {
        res.status(500).json({message: error.message})
    }
}

const findProd = async(req, res)=> {
    try{
        const { id } = req.params; // to find the object with the id as passed after /api/products/___
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error)
    {
        res.status(500).json({message: error.message})
    }
}

const createProd = async (req, res) => {
    try{
        const product = await Product.create(req.body); //taking the input values from the post input page and
        //using it as values for the product we are making
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const updateProd = async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product)
        {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const deleteProd = async (req, res) =>{
    try{
        const {id} = req.params;
        await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "product deleted successfully"});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getProd, findProd, createProd, updateProd, deleteProd
}