import { Router } from "express";

import {
  getInventory,
  createInventory
} from "./inventory.controller";

const router = Router();

router.get("/", getInventory);

router.post("/", createInventory);

export default router;