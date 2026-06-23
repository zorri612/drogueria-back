import { Request, Response } from "express";
import MedicationCatalog from "./medication-catalog.model";

export const searchMedication = async (
  req: Request,
  res: Response
) => {

  const q = req.query.q?.toString() || "";

  if (!q.trim()) {
    return res.json([]);
  }

  const medications =
    await MedicationCatalog.find({

      $or: [

        {
          productoBusqueda: {
            $regex: q.toUpperCase(),
            $options: "i"
          }
        },

        {
          titular: {
            $regex: q,
            $options: "i"
          }
        }

      ]

    })
    .limit(20);

  const result = medications.map(m => ({

    _id: m._id,

    producto: m.producto,

    cantidad: m.cantidad,

    unidadMedida: m.unidadMedida,

    titular: m.titular,

    displayName:
      `${m.producto} | ${m.cantidad} ${m.unidadMedida} --- ${m.titular}`

  }));

  res.json(result);

};