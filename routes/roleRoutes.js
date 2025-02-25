import express from "express";

//controllers
import { createRole, deleteRole, getAllRole, getRoleById, updateRole } from "../controllers/roleController.js";

//middlewares
import { validateMongoDbId } from "../middlewares/validateMongoDbId.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";
import { checkPermission } from "../middlewares/checkPermission.js";
import {validation} from "../middlewares/validation.js";


// validations
import { createRoleSchema } from "../validations/roleSchemas.js";

const router = express.Router()

//crud roles
router.get("/", getAllRole)
router.get("/:id", verifyAdmin, validateMongoDbId, getRoleById)
router.post("/", verifyAdmin, checkPermission("create_role"), validation(createRoleSchema), createRole)
router.put("/:id", verifyAdmin, validateMongoDbId, checkPermission("update_role"), updateRole)
router.delete("/:id", verifyAdmin, validateMongoDbId, checkPermission("delete_role"), deleteRole)

export default router