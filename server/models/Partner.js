const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const partnerSchema = new Schema({
  organization: {
    type: Schema.Types.ObjectId,
    ref: "organization"
  },
  partners: {
    type: [Schema.Types.ObjectId],
    ref: "partner"
  },
  boardMembers: [
    {
      name: {
        type: String,
        required: true
      },
      position: {
        type: String,
        required: true
      }
    }
  ],
  events: [
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  fieldOfWork: {
    type: String,
    required: true
  },
  pastProjects: {
    type: [Schema.Types.ObjectId],
    ref: "tasks"
  },
  feedback: [
    {
      member: {
        type: Schema.Types.ObjectId,
        ref: "members"
      },
      review: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Partner = mongoose.model("partner", partnerSchema);
