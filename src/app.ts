import express from "express";
import cors from "cors";
import productRoutes from "./modules/products/products.routes";
import inventoryRoutes from "./modules/inventory/inventory.routes";
import catalogRoutes from "./modules/catalog/catalog.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use(
  "/api/catalog",
  catalogRoutes
);
export default app;