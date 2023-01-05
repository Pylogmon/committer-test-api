import db from "./utils/db";
import cors from "./utils/cors";

const handler = (req, res) => {
    const { creator, assigned } = req.query;

    if (typeof (creator) != "undefined") {
        var response = db.Commit.filter(x => {
            return x.creator === Number(creator);
        })
        return res.json(response);
    }
    if (typeof (assigned) != "undefined") {
        var response = db.Commit.filter(x => {
            return x.assigned === Number(assigned);
        })
        return res.json(response);
    }
    return res.json([]);
}

module.exports = cors(handler)