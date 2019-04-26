const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    require: true
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Organization = mongoose.model(
  "organization",
  organizationSchema
);
