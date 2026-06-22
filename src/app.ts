import express from "express";
import cors from "cors";
import productRoutes from "./modules/products/products.routes";
import inventoryRoutes from "./modules/inventory/inventory.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/productos", productRoutes);
app.use("/api/inventory", inventoryRoutes);
export default app;