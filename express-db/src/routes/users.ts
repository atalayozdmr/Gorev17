import { Router } from "express";
import sql from "../db";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const users = await sql`SELECT * FROM "Users"`;

    res.json(
      users.map((user) => ({
        id: user.id,
        name: user.name.trim(), // 👈 burada trim uygulandı
      }))
    );
  } catch (error: any) {
    console.error("HATA:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;