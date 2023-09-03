require("dotenv").config()
const express = require("express")
const controller = require("./controller/controller")
const app = express();
app.use(express.json())
const router = express.Router();
const cors = require('cors'); // Import the cors middleware
// Use the cors middleware with options to specify allowed origins
app.use(cors({
    origin: 'http://172.21.176.1:8080', // Allow requests from this origin
}));


// http://172.21.176.1:8080
// By setting the origin option in the cors
//  middleware to 'http://localhost:5173', you're telling your 
//  server to include the necessary Access-Control-Allow-Origin header
//   in responses, allowing requests from that specific origin.

const path = require("path")
app.use(express.static(path.join(__dirname, '/dist')))

// WE WROTE IT BECAUSE WHENEVER WE WRITE THE APPLICATION LEVEL ROUTE IT FIRST SEARCH
// IN THE EXPRESS ROUTER IF IT GET IT THEN IT WILL EXECUTE IT BUT IF IT DOES NOT GET IT THEN IT WILL GIVE AN ERROR


app.use("/api", router);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})
    .get("/readProduct", controller.readProduct)
    .get("/products", controller.getProduct)

    .post("/products", controller.postProduct)
    .get("/product/:id", controller.getSpecificProduct)
    .patch("/product/:id", controller.updateProduct)
    .delete("/product/:id", controller.deleteProduct)


app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.listen("3000", () => {

    console.log("Listenning the request");
})

