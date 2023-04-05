const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({

    Username: { type: String, trim: true, required: true },
    First_Name: { type: String, trim: true, required: true },
    Last_Name: { type: String, trim: true, required: true },
    Email: {type: String, trim: true, required: true, unique: true},
    Password: { type: String },
    Date_Created: { type: Date, default: Date.now },
    Updated_At: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", userSchema);

//The "user" mentioned in the above line should be in lowercase
//singular form ..whereas the actual collection name in
//mongodb will be in the plural form.
//Refer to mongoose documentation for more: https://www.npmjs.com/package/mongoose
//The first argument is the singular name of your collection.
//Mongoose automatically looks for the lowercase plural version. For example, if you use
//const MyModel = mongoose.model('Ticket', mySchema);
//Then MyModel will use the tickets collection, not the Ticket collection.