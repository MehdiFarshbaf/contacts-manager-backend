import express from "express";

// controllers
import {createUser, deleteUser, getAllUsers, getUser, updateUser} from "../controllers/userController.js";

// middlewares
import {validation} from "../middlewares/validation.js";
import {validateMongoDbId} from "../middlewares/validateMongoDbId.js";

// validations
import {createUserSchema} from "../validations/userSchemas.js";

const router = express.Router()

// crud users
router.get("/", getAllUsers)
router.get("/:id", validateMongoDbId, getUser)
router.post("/", validation(createUserSchema), createUser)
router.put("/:id", validateMongoDbId,validation(createUserSchema), updateUser)
router.delete("/:id", validateMongoDbId, deleteUser)
export default router