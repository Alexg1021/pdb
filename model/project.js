'use strict';

var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
  project_name: String,
  description : String,
  client: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  notes: String,
  active: {type: Boolean, default: true},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
  deleted_at: {type: Date, default: null}
});

mongoose.model('Project', ProjectSchema);
