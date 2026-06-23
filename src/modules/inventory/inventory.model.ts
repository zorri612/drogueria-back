import { Schema, model } from "mongoose";

const InventorySchema = new Schema(
  {
    productoId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },

    presentacion: {
      type: String,
      required: true
    },

    cantidadIngresada: {
      type: Number,
      required: true
    },

    stockUnidades: {
      type: Number,
      required: true
    },

    stockMinimo: {
      type: Number,
      default: 10
    },

    lote: {
      type: String
    },

    fechaVencimiento: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

export default model(
  "Inventory",
  InventorySchema
);