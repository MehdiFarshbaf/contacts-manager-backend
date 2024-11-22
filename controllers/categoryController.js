import Category from "../models/Category.js";
import {sendErrorResponse, sendSuccessResponse} from "../helpers/responses.js";

export const getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find().populate("admin", "-password")
        sendSuccessResponse(res, 200, categories)
    } catch (err) {
        next(err)
    }
}

export const createCategory = async (req, res, next) => {
    const {name} = req.body
    try {
        const category = await Category.create({name, admin: req.admin._id})
        sendSuccessResponse(res, 201, category, `دسته بندی ${name} ایجاد شد.`)
    } catch (err) {
        next(err)
    }
}
export const getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id).populate("admin", "-password")
        if (!category) sendErrorResponse("دسته بندی با این شناسه یافت نشد.", 404)
        sendSuccessResponse(res, 200, category)
    } catch (err) {
        next(err)
    }
}

export const updateCategory = async (req, res, next) => {
    const {name} = req.body
    try {

        const category = await Category.findById(req.params.id)
        if (!category) sendErrorResponse("دسته بندی با این شناسه یافت نشد.", 404)

        const newCategory = await Category.findByIdAndUpdate(req.params.id, {name, admin: req.admin._id}, {new: true})
        sendSuccessResponse(res, 200)
    } catch (err) {
        next(err)
    }
}
export const deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id)
        if (!category) sendErrorResponse("دسته بندی با این شناسه یافت نشد.", 404)
        await Category.findByIdAndDelete(req.params.id)
        sendSuccessResponse(res, 200)
    } catch (err) {
        next(err)
    }
}