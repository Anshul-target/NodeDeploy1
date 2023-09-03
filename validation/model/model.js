// WE ARE GOING TO USE JSONTWEBTOKEN(JWT)



const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/userData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to DB");
})

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); //RegExp website
            },
            message: props => `It is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    token: String
}
)







module.exports.userdata = mongoose.model("User", userSchema)