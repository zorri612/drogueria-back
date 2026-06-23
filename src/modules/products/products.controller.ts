import { Request, Response } from "express";

import Product from "./products.model";

export const getProducts = async (
  req: Request,
  res: Response
) => {

  const products =
    await Product.find()
      .sort({ nombre: 1 });

  res.json(products);

};

export const createProduct = async (
  req: Request,
  res: Response
) => {

  const exists = await Product.findOne({
    nombre: req.body.nombre.toUpperCase()
  });

  if (exists) {

    return res.status(400).json({
      message:
        "El medicamento ya existe"
    });

  }

  const product =
    await Product.create(req.body);

  res.status(201).json(product);
};