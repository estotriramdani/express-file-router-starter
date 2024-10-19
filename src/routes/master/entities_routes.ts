import { Router } from "express";

const router = Router();

router.get("/entities", async (req, res) => {
    return res.json({ hello: "Erwan Test" })
});

export default router;