'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let meetingSchema = new Schema({
  meetingId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  studentId: {
    type: String,
    default: ''
  },
  studentName: {
    type: String,
    default: ''
  },
  meetingDate: {
    type: String,
    default: ''
  },
  meetingStartTime: {
    type: String,
    default: ''
  },
  meetingEndTime: {
    type: String,
    default: ''
  },
  isAccepted : {
    type: Boolean,
    default: false
  }


})


mongoose.model('Meeting', meetingSchema);
