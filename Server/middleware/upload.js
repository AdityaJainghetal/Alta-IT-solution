// const multer = require("multer");

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5MB limit
//   },
// });

// module.exports = upload;


// const multer = require("multer");

// const storage = multer.memoryStorage();

// module.exports = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// module.exports = upload;

const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
