import { body } from "express-validator";

export const validateOrder = [
  body("customer_name").notEmpty().withMessage("Customer name is required"),
  body("mobile_no").notEmpty().withMessage("Mobile number is required"),
  body("items_ordered").notEmpty().withMessage("Order items is required"),
  body("expected_delivery_date")
    .notEmpty()
    .withMessage("Expected delivery date is required"),
];
