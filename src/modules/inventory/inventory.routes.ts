import express from 'express';
import { getInventory, createInventory } from './inventory.controller';

const router = express.Router();

router.get('/', getInventory);
router.post('/', createInventory);

export default router;