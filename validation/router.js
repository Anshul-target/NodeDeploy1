// HERE WE ARE LEARNING THE JSONWEBTOKEN AND BECRIPT.JS





require("dotenv").config();
const express = require("express")
controller = require("../validation/controller/controler")
const app = express();
app.use(express.json())
const router = express.Router();


const jwt = require("jsonwebtoken")





app.use("/api", router);

// const auth = router.use((req, res, next) => {
//     // Check if Authorization header exists
//     const authorizationHeader = req.get("Authorization");

//     if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
//         // Return an error response if the header is missing or not formatted as expected
//         return res.status(401).json({ message: "Unauthorized" });
//     }

//     // Extract the token
//     const token = authorizationHeader.split("Bearer ")[1].trim();

//     try {
//         // Verify the token
//         const decoded = jwt.verify(token, process.env.SECRET);
//         console.log(decoded);
//         // Continue processing the request
//         if (decoded.email) {
//             next();

//         }
//         else {

//             res.status(400).json("Wrong Token");

//         }

//     } catch (error) {
//         // Handle token verification error
//         return res.status(401).json({ message: "Unauthorized" });
//     }
// });

















/**********/
router.get("/", controller.readUser)
    .get("/products", controller.getUser)

    .post("/products", controller.postUser)
    .get("/product/:id", controller.getSpecificUser)
    .patch("/product/:id", controller.updateUser)
    .delete("/product/:id", controller.deleteUser)

app.listen("3000", () => {
    console.log("Listenning the request");
})