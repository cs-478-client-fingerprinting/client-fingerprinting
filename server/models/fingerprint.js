const mongoose = require("mongoose");

const fingerprintSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: "Post is required"
    }
  ],
  bio: {
    type: String,
    required: true,
    default: ""
  },
  profilePic: {
    data: Buffer,
    type: String,
    default: ""
  }
});

fingerprintSchema.pre("remove", function(next) {
  // Remove all the comment docs that reference the removed post.
  fingerprintSchema.remove({ posts: post._id });
});

fingerprintSchema.post("remove", function(next) {
  console.log({ posts: post._id });
  fingerprintSchema.remove({ posts: post._id });
});

fingerprintSchema.update = function(req, res, next) {
  const password = req.body.password;
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    req.body.password = hash;
    fingerprint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function(err, fingerprint) {
        if (err) {
          return res.send(err).status(500);
        }
        return res.send(fingerprint).status(200);
      }
    );
  });
};

module.exports = mongoose.model("fingerprint", fingerprintSchema);
