const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ExpertSchema = new Schema({
    member:{
        type:Schema.Types.ObjectId,
        ref:'member'
    },
    date: {
        type: String,
        default: Date.now()
    },
    requests: [
        {
            member:{
                type: Schema.Types.ObjectId,
                ref: 'member'
            },
            status:{
                type: String,
                required: true
            },
            date:{
                type: Date,
                default: Date.now()
            }
        }
    ]
})

module.exports = Expert = mongoose.model('expert',ExpertSchema);
