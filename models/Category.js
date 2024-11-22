import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: String,
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
}, {timestamps: true})
export default mongoose.model("Category", categorySchema)