import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },

    descripcion: String,

    categoria: String,

    tipo: {
      type: String,
      enum: [
        "MEDICAMENTO",
        "SERVICIO",
        "INSUMO"
      ],
      default: "MEDICAMENTO"
    },

    activo: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default model(
  "Product",
  productSchema
);