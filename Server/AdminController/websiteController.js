// const Website = require("../Model/websiteModel");
// const imagekit = require("../config/imagekit");

// exports.createWebsitePhotos = async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "At least one photo is required",
//       });
//     }

//     const uploadedImages = [];

//     for (const file of req.files) {
//       console.log(
//         "Processing file:",
//         file.originalname,
//         "Buffer exists:",
//         !!file.buffer,
//       );
//       // Simulate upload for testing
//       uploadedImages.push(`https://dummy.com/${file.originalname}`);
//       // try {
//       //   const uploadResponse = await imagekit.upload({
//       //     file: file.buffer.toString("base64"),
//       //     fileName: `website-${Date.now()}-${file.originalname}`,
//       //   });

//       //   uploadedImages.push(uploadResponse.url);
//       // } catch (uploadError) {
//       //   console.error(
//       //     "Image upload failed:",
//       //     file.originalname,
//       //     uploadError.message,
//       //   );
//       // }
//     }

//     if (uploadedImages.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "All image uploads failed",
//       });
//     }

//     let websiteData = await Website.findOne().sort({ createdAt: -1 });

//     if (websiteData) {
//       websiteData.images.push(...uploadedImages);
//       await websiteData.save();
//     } else {
//       websiteData = await Website.create({
//         images: uploadedImages,
//       });
//     }

//     return res.status(201).json({
//       success: true,
//       message: "Website photos uploaded successfully",
//       data: websiteData,
//     });
//   } catch (error) {
//     console.error("Server Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

// exports.getWebsitePhoto = async (req, res) => {
//   try {
//     const websiteData = await Website.findOne().sort({ createdAt: -1 });

//     if (!websiteData) {
//       return res.status(404).json({
//         success: false,
//         message: "No website photos found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       data: websiteData,
//     });
//   } catch (error) {
//     console.error("Fetch Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error.message,
//     });
//   }
// };

const Website = require("../Model/websiteModel");
const imagekit = require("../config/imagekit");

/* ================= UPLOAD ================= */
// exports.uploadPhotos = async (req, res) => {
//   try {
//     if (!req.files || req.files.length === 0)
//       return res.status(400).json({ success: false, message: "No images" });

//     const uploaded = [];

//     for (const file of req.files) {
//       const response = await imagekit.upload({
//         // file: file.buffer.toString("base64"),
//         file: `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,

//         fileName: file.originalname.replace(/\s+/g, "-"),
//         folder: "/website",
//       });

//       uploaded.push({
//         url: response.url,
//         fileId: response.fileId,
//       });
//     }

//     let website = await Website.findOne();
//     if (website) {
//       website.images.push(...uploaded);
//       await website.save();
//     } else {
//       website = await Website.create({ images: uploaded });
//     }

//     res.status(201).json({ success: true, data: website });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };
exports.uploadPhotos = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No images provided",
      });
    }

    const uploaded = [];

    for (const file of req.files) {
      // Simulate upload
      uploaded.push(`https://dummy.com/${file.originalname}`);
      // const response = await imagekit.upload({
      //   file: `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
      //   fileName: file.originalname.replace(/\s+/g, "-"),
      //   folder: "/website",
      // });

      // uploaded.push(response.url);
    }

    let website = await Website.findOne();
    if (website) {
      website.images.push(...uploaded);
      await website.save();
    } else {
      website = await Website.create({ images: uploaded });
    }

    return res.status(201).json({
      success: true,
      data: website,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Image upload failed",
      error: error.message,
    });
  }
};

/* ================= GET ================= */
exports.getPhotos = async (req, res) => {
  const website = await Website.findOne();
  if (!website)
    return res.status(404).json({ success: false, message: "No data" });

  res.json({ success: true, data: website });
};

/* ================= DELETE ================= */
exports.deletePhoto = async (req, res) => {
  const { index } = req.params;

  const website = await Website.findOne();
  if (!website) return res.status(404).json({ success: false });

  const image = website.images[index];
  if (!image) return res.status(404).json({ success: false });

  await imagekit.deleteFile(image.fileId);
  website.images.splice(index, 1);
  await website.save();

  res.json({ success: true, data: website });
};

/* ================= REPLACE ================= */
exports.replacePhoto = async (req, res) => {
  const { index } = req.params;

  if (!req.file)
    return res.status(400).json({ success: false, message: "No file" });

  const website = await Website.findOne();
  if (!website) return res.status(404).json({ success: false });

  const oldImage = website.images[index];
  if (!oldImage) return res.status(404).json({ success: false });

  await imagekit.deleteFile(oldImage.fileId);

  const upload = await imagekit.upload({
    file: req.file.buffer.toString("base64"),
    fileName: req.file.originalname.replace(/\s+/g, "-"),
    folder: "/website",
  });

  website.images[index] = {
    url: upload.url,
    fileId: upload.fileId,
  };

  await website.save();

  res.json({ success: true, data: website });
};
