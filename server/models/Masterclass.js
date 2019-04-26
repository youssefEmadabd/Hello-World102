const mongoose = require('mongoose');
const Schema = mongoose.Schema
const MasterclassSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required: true
    },
    requests: [
        {
            member: {
                type: Schema.Types.ObjectId,
                ref: 'members'
            },
            status: {
                type: String,
                default: 'pending'
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    date: {
        type: String,
        default: Date.now()
    }
})

module.exports = Masterclass = mongoose.model('masterclass',MasterclassSchema);
