import path from "path";
import XLSX from "xlsx";

import mongoose from "mongoose";
import dotenv from "dotenv";

import MedicationCatalog from "../src/modules/catalog/medication-catalog.model";

dotenv.config();

const BATCH_SIZE = 1000;

function normalizeProductName(
  name: string
): string {

  return name
    .replace(/\|/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();

}

async function run() {

  try {

    console.log("Conectando a Mongo...");

    await mongoose.connect(
      process.env.MONGO_URI!
    );

    console.log("Mongo conectado");

    const filePath = path.join(
      process.cwd(),
      "cums2026.xlsx"
    );

    const workbook =
      XLSX.readFile(filePath);

    const firstSheetName = workbook.SheetNames[0];

if (!firstSheetName) {
  throw new Error(
    "El archivo Excel no contiene hojas"
  );
}

const sheet =
  workbook.Sheets[firstSheetName];

    const rows: any[] =
      XLSX.utils.sheet_to_json(sheet);

    console.log(rows.slice(0, 5));
    console.log(
      `Filas encontradas: ${rows.length}`
    );

    const docs = rows.map((row) => ({

      expediente:
        row.expediente?.toString(),

      producto:
  normalizeProductName(
    row.producto?.toString() || ''
  ),

productoBusqueda:
  normalizeProductName(
    row.producto?.toString() || ''
  ),

      titular:
        row.titular?.toString(),

      registroSanitario:
        row.registrosanitario?.toString(),

      viaAdministracion:
        row.viaadministracion?.toString(),

      unidadMedida:
        row.unidadmedida?.toString(),

      cantidad:
        Number(row.cantidad),

      formaFarmaceutica:
        row.formafarmaceutica?.toString()

    }));

    console.log(
      "Eliminando duplicados..."
    );

    const uniqueDocs = [
      ...new Map(
        docs.map(item => [

          [
            item.expediente,
            item.registroSanitario,
            item.cantidad,
            item.formaFarmaceutica
          ].join("|"),

          item

        ])
      ).values()
    ];

    console.log(
      `Registros únicos: ${uniqueDocs.length}`
    );

    for (
      let i = 0;
      i < uniqueDocs.length;
      i += BATCH_SIZE
    ) {

      const batch =
        uniqueDocs.slice(
          i,
          i + BATCH_SIZE
        );

      await MedicationCatalog.insertMany(
        batch,
        {
          ordered: false
        }
      );

      console.log(
        `${Math.min(
          i + BATCH_SIZE,
          uniqueDocs.length
        )}/${uniqueDocs.length}`
      );
    }

    console.log(
      "Importación finalizada"
    );

    process.exit(0);

  } catch (error) {
    console.error(error);
    process.exit(1);

  }

}

run();