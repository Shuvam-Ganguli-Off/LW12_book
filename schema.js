const mongoose = require("mongoose")
const { Schema } = mongoose;

const stdschema = new Schema({
    book_name: String,
    name_of_issuer: String,
    due_date: String
});

module.exports = mongoose.model("stdinfo",stdschema,"Book-Issue")