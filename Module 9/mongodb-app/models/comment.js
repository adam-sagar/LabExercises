const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema({

    UserID: { type: String, trim: true, required: true },
    PostID: { type: String, trim: true, required: true },
    Content: { type: String, trim: true, required: true },
    Date_Created: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now }
});

module.exports = mongoose.model("comment", commentSchema);