const {Schema}=require("mongoose");
const OrdersSchema=new Schema({
    name:String,
    qty:Number,
    avg:Number,
    mode:String,
});
module.exports={OrdersSchema};