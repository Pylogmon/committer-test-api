import db from "./db";

export default function handler(_, res) {
    const product_list = db.Product;
    return res.json(product_list);
}