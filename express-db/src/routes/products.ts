import { Router } from "express";
import sql from "../db";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await sql`
      SELECT 
        "Users".name AS user_name,
        orders."productName" AS product_name
      FROM orders
      JOIN "Users" ON orders.user_id = "Users".id
    `;

    const cleaned = result.map((item) => ({
      user_name: typeof item.user_name === 'string' ? item.user_name.trim() : item.user_name,
      product_name: typeof item.product_name === 'string' ? item.product_name.trim() : item.product_name,
    }));

    res.json(cleaned);
  } catch (error: any) {
    console.error("HATA:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;


