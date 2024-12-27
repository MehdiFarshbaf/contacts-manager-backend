// models
import User from "../models/User.js";
import Category from "../models/Category.js";

// helpers
import {sendErrorResponse, sendSuccessResponse} from "../helpers/responses.js";
import {handleDeleteFile, storeImage} from "../helpers/imageFunctions.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        sendSuccessResponse(res, 200, users)
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).populate("category")
        if (!user) sendErrorResponse("کاربری با این شناسه یافت نشد.", 404)

        sendSuccessResponse(res,200,user)
    } catch (err) {
        next(err)
    }
}

export const createUser = async (req, res, next) => {
    try {
        const {firstName, lastName, email, mobile, job, category_id} = req.body

        const existUser = await User.findOne({ email })
        if (existUser) sendErrorResponse("کاربری با این ایمیل قبلا ثبت نام کرده است.", 422)


        const exitCategory = await Category.findById(category_id)
        if (!exitCategory) sendErrorResponse("دسته بندی با این شناسه یافت نشد.", 404)

        const {fileName, url} = await storeImage(req, res, next, "users")
        const user = await User.create({
            firstName,
            lastName,
            email,
            job,
            mobile,
            image: fileName,
            image_path: url,
            category_id
        })
        sendSuccessResponse(res,201,user,"کاربر با موفقیت ایجاد شد.")
    } catch (err) {
        next(err)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        let fileName = ""
        let url = ""
        const {firstName, lastName, email, mobile, job, category_id} = req.body

        const findUser = await User.findById(req.params.id)
        if (!findUser) sendErrorResponse("کاربری با این شناسه یافت نشد.", 404)

        const exitCategory = await Category.findById(category_id)
        if (!exitCategory) sendErrorResponse("دسته بندی با این شناسه یافت نشد.", 404)

        if (req.files === null) {
            fileName = findUser.image
            url = findUser.url
        } else {
            await handleDeleteFile("users", findUser.image)
            const {fileName: newFileName, url: newUrl} = await storeImage(req, res, next, "users")
            fileName = newFileName
            url = newUrl
        }
        const user = await User.findByIdAndUpdate(req.params.id,{
            firstName,
            lastName,
            email,
            job,
            mobile,
            image: fileName,
            image_path: url,
            category_id
        }, {new: true})
        sendSuccessResponse(res,200,user,"کاربر با موفقیت ویرایش شد.")
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const findUser = await User.findById(req.params.id)
        if (!findUser) sendErrorResponse("کاربری با این شناسه یافت نشد.", 404)

        await handleDeleteFile("users", findUser.image)

        await User.findByIdAndDelete(req.params.id)

        sendSuccessResponse(res,200,undefined,`کاربر ${findUser.fullname} با موفقیت حذف شد.`)
    } catch (err) {
        next(err)
    }
}