import db from "./utils/db";
import cors from "./utils/cors";

const handler = (req, res) => {
    const { user_name, password } = req.query;

    if (typeof (user_name) != "undefined") {
        if (typeof (password) != "undefined") {
            const user = db.User.filter(x => {
                return x.user_name == user_name;
            })
            if (user.length != 0) {
                if (user[0].password == password) {
                    return res.json(user[0]);
                }
            }
        }
    }
    return res.json({});
}

module.exports = cors(handler)