const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
    name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
   timing: {
     type: String,
     required: true
   },
  publishDate: {
    type: Date,
    required: true
  },
  pageCount: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  
  qualiFication: {
    type: String,
    required: true
  },

  apNumber: {
    type: String,
    required: true
  },
  feeDay: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  coverImage: {
    type: Buffer,
    required: true
  },
  coverImageType: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author'
  }
})

bookSchema.virtual('coverImagePath').get(function() {
  if (this.coverImage != null && this.coverImageType != null) {
    return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
  }
})

module.exports = mongoose.model('Book', bookSchema)