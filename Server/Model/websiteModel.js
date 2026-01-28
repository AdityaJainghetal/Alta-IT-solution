// const mongoose = require("mongoose");

// const websiteSchema = new mongoose.Schema(
//   {
//     images: {
//       type: [String],
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Website", websiteSchema);

const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema(
  {
    images: [String],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Website", websiteSchema);
