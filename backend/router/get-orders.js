import express from "express";
import { orders } from "../data/order.js";

const router = express.Router();

router.get("/orders", async (req, res) => {
  try {
    res.send(orders);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

export { router as getOrdersRouter };
