const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({

    UserID: { type: String, trim: true, required: true },
    Title: { type: String, trim: true, required: true },
    Description: { type: String, trim: true, required: true },
    Image: { type: String, trim: true, required: true },
    Likes: { type: String, trim: true},
    Date_Created: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postSchema);