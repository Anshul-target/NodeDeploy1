const mongoose = require("mongoose");
const models = require("../model/model");
const Product = models.product


const readProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);
    }
    catch (err) {
        res.status(404).json(err.message)
    }
}
const getProduct = async (req, res) => {

    // GET
    const product = new Product({

        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]


    }
    )


    try {


        const result = await product.save();
        res.json(result)

    }


    catch (err) {
        res.status(400).json(err)
    }

}

const getSpecificProduct = async (req, res) => {
    const uid = req.params.id
    try {
        const result = await Product.findById(uid);
        res.status(200).json(result);
    }

    catch (err) {
        res.status(400).json(err.message);

    }


}

const postProduct = async (req, res) => {

    const product = new Product(req.body)


    try {


        const result = await product.save();
        res.json(result)

    }


    catch (err) {
        res.status(400).json(err)
    }
}

const updateProduct = async (req, res) => {
    const uid = req.params.id
    try {
        const result = await Product.findByIdAndUpdate({ _id: uid }, req.body, { new: true, runValidators: true });
        res.status(200).json(result);
    }

    catch (err) {
        res.status(400).json(err.message);

    }
}

const deleteProduct = async (req, res) => {
    const uid = req.params.id
    try {
        const result = await Product.findByIdAndDelete(uid);
        res.status(200).json(result);
    }

    catch (err) {
        res.status(400).json(err.message);

    }
}


module.exports = {
    getProduct, postProduct, updateProduct, deleteProduct, getSpecificProduct, readProduct
}