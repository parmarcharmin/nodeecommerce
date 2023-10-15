const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
    productCategory : String,
    productCategoryID:String,
    productName:String ,
    productDescription :String ,
    productPrice:Number,
    productRating:{
        type : Number,
        max : 5,
        default : 0
    },
    productImage:[String],
    productType:String,
    productSlug:String,
});

let Product = mongoose.model('Products', ProductSchema);
module.exports = Product