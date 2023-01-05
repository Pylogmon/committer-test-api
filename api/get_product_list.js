import db from "./utils/db";
import cors from "./utils/cors";


const handler = (_, res) => {
    const product_list = db.Product;
    return res.json(product_list);
}

module.exports = cors(handler)
