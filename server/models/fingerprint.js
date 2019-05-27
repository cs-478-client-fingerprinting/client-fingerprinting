import mongoose from "mongoose";

const fingerprintSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userAgent: {
    type: String
  },
  webdriver: {
    type: String
  },
  language: {
    type: String
  },
  colorDepth: {
    type: Number
  },
  deviceMemory: {
    type: Number
  },
  pixelRatio: {
    type: Number
  },
  hardwareConcurrency: {
    type: Number
  },
  screenResolution: [
    {
      type: Number
    }
  ],
  availableScreenResolution: [
    {
      type: Number
    }
  ],
  timezoneOffset: {
    type: Number
  },
  timezone: {
    type: String
  },
  sessionStorage: {
    type: Boolean
  },
  localStorage: {
    type: Boolean
  },
  indexedDb: {
    type: Boolean
  },
  addBehavior: {
    type: Boolean
  },
  openDatabase: {
    type: Boolean
  },
  cpuClass: {
    type: String
  },
  platform: {
    type: String
  },
  doNotTrack: {
    type: String
  },
  plugins: [
    {
      type: String
    }
  ],
  canvas: [
    {
      type: String
    }
  ],
  webglVendorAndRenderer: {
    type: String
  },
  adBlock: {
    type: Boolean
  },
  hasLiedLanguages: {
    type: Boolean
  },
  hasLiedResolution: {
    type: Boolean
  },
  hasLiedOs: {
    type: Boolean
  },
  hasLiedBrowser: {
    type: Boolean
  },
  touchSupport: [
    {
      type: Boolean
    }
  ],
  fonts: [
    {
      type: String
    }
  ],
  fontsFlash: {
    type: String
  },
  audio: {
    type: String
  },
  enumerateDevices: [
    {
      type: String
    }
  ]
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
};

export default mongoose.model("fingerprint", fingerprintSchema);
