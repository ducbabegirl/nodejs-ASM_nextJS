import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
      
     
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);