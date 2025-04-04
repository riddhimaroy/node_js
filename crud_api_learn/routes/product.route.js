const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js')
const {getProd, findProd, createProd, updateProd, deleteProd} = require('../controllers/product.controller.js')

router.get('/', getProd);

router.get('/:id', findProd);

router.post('/', createProd);

//update product
router.put('/:id', updateProd);

//delete product
router.delete('/:id', deleteProd);

module.exports = router;