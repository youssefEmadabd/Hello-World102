mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
   application:{
       type: Schema.Types.ObjectId,
       ref: 'application'
   },
    consultant:{
      type: Schema.Types.ObjectId,
      ref: 'consultant'
    },
    levelOfCommitment: {
       type: Number,
        required: true
    },
    experienceLevel: {
       type: Number,
        required: true
    },
    skills: {
       type: [String],
        required: true
    },
    monetaryCompensation: {
       type: Number,
        required: true
    },
    applicants: [
        {
            member: {
                type: Schema.Types.ObjectId,
                ref: 'member'
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
    reviewed:{
       type: Boolean,
        default: false
    },
    extra: {
       type: [String]
    },
    date: {
       type: Date,
        default: Date.now()
    }
});

module.exports = Task = mongoose.model('task',taskSchema);