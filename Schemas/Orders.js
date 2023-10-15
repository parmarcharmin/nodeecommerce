const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    productId : { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalPrice:Number ,
    productQuantity :Number ,
    orderId : String,
    estimatedTimeForDelivery: Number,
    earlyDelivery: Boolean,
    earlyEstimatedTimeForDelivery:Number,
});

let Orders = mongoose.model('Orders', OrdersSchema);
module.exports = Orders