const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const educationSchema = new Schema({
        organization: {
            type: Schema.Types.ObjectId,
            ref: 'organization'
        },
        courses: [
            {
                title:{
                    type: String,
                    required: true
                },
                description:{
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],
        trainers: [
            {
                name:{
                    type: String,
                    require: true
                },
                bio:{
                    type: String,
                    required: true
                }
            }
        ],
    certificates: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    trainingPrograms: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            trainers: {
                type: [String],
                required: true
            }
        }
    ],
    date:{
            type: Date,
            default: Date.now()
    }
})

module.exports = Education = mongoose.model('education',educationSchema);
