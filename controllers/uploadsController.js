const path = require('path');
const {StatusCodes} = require('http-status-codes');
const cloudinary = require('cloudinary').v2
const CustomError = require('../errors');
const fs = require('fs');

exports.uploadProductImageLocal = async(req, res) => {
    if(!req.files){
        throw new CustomError.BadRequestError('No file uploaded');
    }
    const productImage = req.files.image;

    if(!productImage.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError('Please Upload Image');
    };

    const maxSize = 1024 * 1024;

    if(productImage.size > maxSize){
        throw new CustomError.BadRequestError('Please upload a smaller image')
    };

    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`);

    await productImage.mv(imagePath);

    return res
        .status(StatusCodes.OK)
        .json({image: {src: `/uploads/${productImage.name}`}});
};


exports.uploadProductImage = async (req, res) => {
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: 'file-upload',
    });
    fs.unlinkSync(req.files.image.tempFilePath);
    res.status(StatusCodes.OK).json({image: {src:result.secure_url}});
};