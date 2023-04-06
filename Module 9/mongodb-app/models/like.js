const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({

    UserID: { type: Number, trim: true, required: true },
    PostID: { type: Number, trim: true, required: true },
    Like: { type: Boolean, trim: true, required: true },
    CommentID: { type: Number, trim: true, required: true },
    Date_Created: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now }
});

module.exports = mongoose.model("like", likeSchema);