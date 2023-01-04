import db from "./db";

export default function handler(req, res) {
    const { creator, assigned } = req.query;
    let response = [];
    if (typeof (creator) != "undefined") {
        response = db.Commit.filter(x => {
            return x.creator === creator;
        })
    }
    if (typeof (assigned) != "undefined") {
        response = db.Commit.filter(x => {
            return x.assigned === assigned;
        })
    }
    return res.json(response);
}