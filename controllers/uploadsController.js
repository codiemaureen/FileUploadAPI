const path = require('path');
const {StatusCodes} = require('http-status-codes');

exports.uploadProductImage = async(req, res) => {
    const productImage = req.files.image;

    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`);

    await productImage.mv(imagePath);

    res.send('Upload Product Images');
};
