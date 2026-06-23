import { Schema, model } from "mongoose";

const MedicationCatalogSchema = new Schema(
  {
    expediente: {
      type: String,
      index: true
    },

    producto: {
      type: String,
      required: true
    },

    productoBusqueda: {
      type: String,
      required: true,
      index: true
    },

    titular: String,

    registroSanitario: {
      type: String,
      index: true
    },

    viaAdministracion: String,

    unidadMedida: String,

    cantidad: Number,

    formaFarmaceutica: String
  },
  {
    timestamps: true
  }
);

export default model(
  "MedicationCatalog",
  MedicationCatalogSchema
);