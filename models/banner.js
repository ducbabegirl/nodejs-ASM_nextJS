import mongoose, { Schema, ObjectId } from "mongoose";
const bannerSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    img: {
        type: String,
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });
export default mongoose.model('Banner', bannerSchema);