const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
        

 noteTitle: {
    type: String,
    required: true,
    trim: true
  },
  noteDescription: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    required: true,
    default: 'MEDIUM'
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Notes", noteSchema)

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated