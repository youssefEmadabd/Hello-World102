mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const applicationSchema = new Schema({
    partner:{
      type: Schema.Types.ObjectId,
      ref: 'partner'
    },
    description:{
        type: String,
        required: 'true'
    },
    applicants: [
        {
            consultant: {
                type: Schema.Types.ObjectId,
                ref: 'consultant'
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
    messages: [
        {
            status:{
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    needConsultancy: {
        type: Boolean,
        required:true
    },
    reviewed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Application = mongoose.model('application',applicationSchema);