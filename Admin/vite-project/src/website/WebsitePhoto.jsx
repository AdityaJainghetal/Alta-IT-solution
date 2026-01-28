

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const WebsitePhoto = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPhotos, setCurrentPhotos] = useState([]);

//   const API_BASE_URL = "http://localhost:8000/api/website";

//   // Fetch existing website photos
//   const fetchPhotos = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/photos`);

//       if (res.data?.data?.images) {
//         setCurrentPhotos(res.data.data.images);
//       }
//     } catch (error) {
//       console.error("Failed to fetch photos:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPhotos();
//   }, []);

//   // Handle multiple file selection
//   const handleChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);

//     setFiles(selectedFiles);
//     setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
//   };

//   // Upload images
//   const handleUpload = async () => {
//     if (files.length === 0) {
//       alert("Please select at least one image");
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((file) => formData.append("images", file));

//     try {
//       setLoading(true);

//       const res = await axios.post(`${API_BASE_URL}/photos`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (res.data?.data?.images) {
//         setCurrentPhotos(res.data.data.images);
//       }

//       setFiles([]);
//       setPreviews([]);
//       alert("Photos uploaded successfully!");
//     } catch (error) {
//       console.error("Upload failed:", error);
//       alert(
//         error.response?.data?.message ||
//           "Upload failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Website Photos
//         </h2>

//         {/* Current Photos */}
//         {currentPhotos.length > 0 && (
//           <div className="mb-4">
//             <p className="text-sm text-gray-600 mb-2">Current Photos</p>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {currentPhotos.map((url, index) => (
//                 <img
//                   key={index}
//                   src={url}
//                   alt={`Website ${index}`}
//                   className="w-full h-40 object-cover rounded-lg border"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Preview */}
//         {previews.length > 0 && (
//           <div className="mb-4">
//             <p className="text-sm text-gray-600 mb-2">Preview</p>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {previews.map((url, index) => (
//                 <img
//                   key={index}
//                   src={url}
//                   alt={`Preview ${index}`}
//                   className="w-full h-40 object-cover rounded-lg border"
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleChange}
//           className="block w-full text-sm text-gray-600
//           file:mr-4 file:py-2 file:px-4
//           file:rounded-lg file:border-0
//           file:text-sm file:font-semibold
//           file:bg-blue-50 file:text-blue-600
//           hover:file:bg-blue-100 mb-4 cursor-pointer"
//         />

//         <button
//           onClick={handleUpload}
//           disabled={loading || files.length === 0}
//           className="w-full bg-blue-600 text-white py-2 rounded-lg 
//           hover:bg-blue-700 transition disabled:opacity-50 
//           disabled:cursor-not-allowed font-medium"
//         >
//           {loading ? "Uploading..." : "Upload Photos"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WebsitePhoto;



import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/api/website";

const WebsitePhoto = () => {
  const [photos, setPhotos] = useState([]);
  const [files, setFiles] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const res = await axios.get(`${API}/photos`);
    setPhotos(res.data.data.images);
  };

  const uploadPhotos = async () => {
    const fd = new FormData();
    files.forEach((f) => fd.append("images", f));
    const res = await axios.post(`${API}/photos`, fd);
    setPhotos(res.data.data.images);
    setFiles([]);
  };

  const deletePhoto = async (index) => {
    const res = await axios.delete(`${API}/photos/${index}`);
    setPhotos(res.data.data.images);
  };

  const replacePhoto = async (file) => {
    const fd = new FormData();
    fd.append("image", file);
    const res = await axios.put(`${API}/photos/${editIndex}`, fd);
    setPhotos(res.data.data.images);
    setEditIndex(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <input multiple type="file" onChange={(e) => setFiles([...e.target.files])} />
      <button onClick={uploadPhotos} className="bg-blue-600 text-white px-4 py-2 ml-2">
        Upload
      </button>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {photos.map((img, i) => (
          <div key={i} className="relative">
            <img src={img.url} className="h-40 w-full object-cover rounded" />

            <button
              onClick={() => setEditIndex(i)}
              className="absolute top-2 right-10 bg-black text-white px-2"
            >
              ✏️
            </button>

            <button
              onClick={() => deletePhoto(i)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2"
            >
              🗑
            </button>
          </div>
        ))}
      </div>

      {editIndex !== null && (
        <div className="mt-4">
          <input type="file" onChange={(e) => replacePhoto(e.target.files[0])} />
        </div>
      )}
    </div>
  );
};

export default WebsitePhoto;
