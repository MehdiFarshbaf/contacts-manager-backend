import express from "express";

// controllers
import {
    createCategory,
    deleteCategory,
    getCategories,
    getCategory,
    updateCategory
} from "../controllers/categoryController.js";

// middlewares
import {verifyAdmin} from "../middlewares/verifyAdmin.js";
import {checkPermission} from "../middlewares/checkPermission.js";
import {validation} from "../middlewares/validation.js";
import {validateMongoDbId} from "../middlewares/validateMongoDbId.js";

// validations
import {createCategorySchema} from "../validations/categorySchemas.js";

const router = express.Router()

// crud category
router.get("/", getCategories)
router.get("/:id", validateMongoDbId, getCategory)
router.post("/",verifyAdmin,checkPermission("create_category"), validation(createCategorySchema), createCategory)
router.put("/:id", verifyAdmin, checkPermission("update_category"), validateMongoDbId, validation(createCategorySchema), updateCategory)
router.delete("/:id", verifyAdmin, checkPermission("delete_category"), validateMongoDbId, deleteCategory)

export default router