const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const controller = require("../AdminController/websiteController");

router.post("/photos", upload.array("images", 10), controller.uploadPhotos);

router.get("/photos", controller.getPhotos);
router.delete("/photos/:index", controller.deletePhoto);
router.put("/photos/:index", upload.single("image"), controller.replacePhoto);

module.exports = router;
