import db from "./db";

export default function handler(req, res) {
    const { creator, assigned } = req.query;
    console.log("creator", creator)
    console.log("assigned", assigned)
    if (typeof (creator) != "undefined") {
        var response = db.Commit.filter(x => {
            console.log("creator:", x.creator, x.creator === creator)
            return x.creator === Number(creator);
        })
        console.log(response)
        return res.json(response);
    }
    if (typeof (assigned) != "undefined") {
        var response = db.Commit.filter(x => {
            return x.assigned === Number(assigned);
        })
        console.log(response)
        return res.json(response);
    }
    return res.json([]);
}