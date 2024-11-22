import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, ""],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, ""],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    job: {
        type: String,
        default:"",
        trim: true
    },
    mobile: {
        type: String,
        unique: true,
        trim: true
    },
    image_path: String,
    image: String,
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "شناسه دسته بندی الزامی است."]
    },
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
    timestamps: true
})
userSchema
    .virtual('fullname')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    });
userSchema.virtual('category', {
    ref: 'Category',
    localField: 'category_id',
    foreignField: '_id',
    justOne: true, // default is false
})
export default mongoose.model("User", userSchema)