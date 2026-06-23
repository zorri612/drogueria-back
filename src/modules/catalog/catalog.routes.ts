import { Router } from "express";
import { searchMedication } from "./catalog.controller";

const router = Router();

router.get(
  "/search",
  searchMedication
);

export default router;