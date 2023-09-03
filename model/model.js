const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/Newcart', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("Connected to DB");
// })


mongoose.connect("mongodb+srv://Anshul:Anshulyadav%402002@cluster0.nbjuqax.mongodb.net/cart?retryWrites=true&w=majority").then(() => {
    console.log("Connected to DB");
})


const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {

        type: String,


    },
    price: {

        type: Number,
        min: [100, "Very less value"],
        max: [5000, "Very large value"],
        required: true
    },

    discountPercentage: {

        type: Number,
        min: [0, "Wrong value"],
        required: true

    },

    rating: {

        type: Number,
        min: [0, "Wrong rating"],

    },
    brand: {

        type: String,

    },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: { type: [String] },





})

module.exports.product = mongoose.model("Products", productSchema);