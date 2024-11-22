import express from "express";
import {getAllPermissions} from "../controllers/permissionController.js";

// controllers



const router = express.Router()

router.get("/", getAllPermissions)
export default router