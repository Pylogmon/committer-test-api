import db from "./db";

export default function handler(req, res) {
    const { creator, assigned } = req;
    let response = [];
    if (typeof (creator) != "undefined") {
        response = db.Commit.filter(x => {
            x.creator === creator
        })
    }
    if (typeof (assigned) != "undefined") {
        response = db.Commit.filter(x => {
            x.assigned === assigned
        })
    }
    return res.json(response);
}