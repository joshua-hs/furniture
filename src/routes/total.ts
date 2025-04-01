import { Router, Request, Response } from "express";
import products from "../products.json";

const router = Router();

router.post("/api/total", (req: Request, res: Response) => {
  const { items } = req.body;

  if (!Array.isArray(items)) {
    return res.status(400).json({ error: "Invalid input, expected an array" });
  }

  if (items.length === 0) {
    return res
      .status(400)
      .json({ error: "Array must contain at least one item" });
  }

  let total = 0;

  items.forEach((item) => {
    const product = products.find((product) => product.id === item);
    if (!product) {
      return res.status(400).json({ error: `Invalid item provided: ${item}` });
    } else {
      total += Number.parseFloat(product.price);
    }
  });

  total = parseFloat(total.toFixed(2));

  return res.json({ total });
});

export { router as totalRouter };
