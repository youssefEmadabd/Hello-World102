const mongoose = require('mongoose');
const Schema = mongoose.Schema
const AdminSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    date: {
        type: String,
        default: Date.now()
    }
})
module.exports = Admin = mongoose.model('admin',AdminSchema);