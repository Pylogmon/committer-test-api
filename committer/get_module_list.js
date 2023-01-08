import db from "./utils/db";
import cors from "./utils/cors";

const handler = (req, res) => {
    const { product_id, project_id } = req.query;

    if (typeof (product_id) != "undefined") {
        if (typeof (project_id) != "undefined") {
            var response = db.Module.filter(x => {
                return (x.product_id === Number(product_id)) && (x.project_id === Number(project_id));
            })
            return res.json(response);
        }
    }

    return res.json([]);
}

module.exports = cors(handler)