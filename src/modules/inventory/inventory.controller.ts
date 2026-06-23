import { Request, Response } from "express";

import Inventory from "./inventory.model";

export const getInventory = async (
  req: Request,
  res: Response
) => {

  const inventory =
    await Inventory.find()
      .populate("productoId")
      .sort({
        fechaVencimiento: 1
      });

  res.json(inventory);

};

export const createInventory =
async (
  req: Request,
  res: Response
) => {

  const item =
    await Inventory.create(req.body);

  res.status(201).json(item);

};