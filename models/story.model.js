// const mongoose = require('mongoose');

// const storySchema = mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user"
//   },
//   story: String,
//   date: {
//     type: Date,
//     default: Date.now
//   }
// })

// module.exports = mongoose.model("story", storySchema);


const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  mediaUrl: { type: String, required: true },
  caption: { type: String },
  timestamp: { type: Date, default: Date.now },
  views: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
});

module.exports = mongoose.model('Story', storySchema);
