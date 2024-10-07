const express = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/productController');

const router = express.Router();
// ตั้งคKา multer สําหรับจัดการไฟลgอัปโหลด
const storage = multer.diskStorage({
destination: (req, file, cb) => {
    cb(null, 'uploads/');
},
filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
},
});

const upload = multer({ storage });

// กําหนดเส8นทางสําหรับอัปโหลดภาพ
router.post('/upload', upload.single('image'), uploadImage);

module.exports = router;