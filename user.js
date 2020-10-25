const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        login: String,
        password: String,
        phone: String,
        phone2: String,
        receiverName: String,
        street: String,
        house: String,
        apartment: String,
        comment: String,
        cart: Object
    },
    jwt: String
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
