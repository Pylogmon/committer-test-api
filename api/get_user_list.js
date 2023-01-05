import db from "./utils/db";
import cors from "./utils/cors";


const handler = (_, res) => {
    const user_list = db.User.map(x => { delete x.password });
    return res.json(user_list);
}

module.exports = cors(handler)