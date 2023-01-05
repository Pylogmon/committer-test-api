import db from "./utils/db";
import cors from "./utils/cors";

const handler = (req, res) => {
    const { product_id } = req.query;

    if (typeof (product_id) != "undefined") {
        var response = db.Project.filter(x => {
            return x.product_id === Number(product_id);
        })
        return res.json(response);
    }

    return res.json([]);
}

module.exports = cors(handler)