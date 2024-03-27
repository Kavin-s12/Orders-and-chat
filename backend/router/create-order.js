import express from "express";
import { orders } from "../data/order.js";
import { validateOrder } from "../validation/validateOrder.js";
import { validationResult } from "express-validator";

const createOrderRouter = (io) => {
  const router = express.Router();

  router.post("/order", validateOrder, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const {
        customer_name,
        mobile_no,
        items_ordered,
        expected_delivery_date,
      } = req.body;

      const newOrder = {
        id: orders.length + 1,
        customer_name,
        mobile_no,
        items_ordered,
        expected_delivery_date,
      };

      orders.push(newOrder);

      // Emit a socket event when a new order is created
      io.emit("newOrder", newOrder);

      res.send({ message: "Order received" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  return router;
};

export { createOrderRouter };
