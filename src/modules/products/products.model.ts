import { Schema, model } from "mongoose";

const PresentationSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },

    factor: {
      type: Number,
      required: true
    },

    permiteVenta: {
      type: Boolean,
      default: true
    }
  },
  {
    _id: false
  }
);

const ProductSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },

    descripcion: {
      type: String,
      default: ""
    },

    tipo: {
      type: String,
      enum: [
        "MEDICAMENTO",
        "SERVICIO",
        "COMBO"
      ],
      required: true
    },

    presentaciones: [PresentationSchema]
  },
  {
    timestamps: true
  }
);

export default model(
  "Product",
  ProductSchema
);