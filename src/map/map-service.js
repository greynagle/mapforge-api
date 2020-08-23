const xss = require("xss");

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const mapService = {
    getUserNicknameAndMaps(db, user_id) {
        return Promise.all([
            db("users").select("nickname").where({ id: user_id }),
            db("maps")
                .select("map_name", "map_string", "width")
                .where({ user_id }),
        ]);
    },
    addMap(db, mapData) {
        return db
            .insert(mapData)
            .into("maps")
            .returning("*")
            .then((rows) => {
                return rows[0];
            });
    },
};

module.exports = mapService;
