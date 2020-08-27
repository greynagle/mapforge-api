const express = require("express");
const path = require("path");
const MapService = require("./map-service");
const AuthService = require("../auth/auth-service");
const logger = require("../logger");
const xss = require("xss");

const mapRouter = express.Router();
const jsonBodyParser = express.json();

const serializeMap = (map) => ({
    id: map.id,
    map_name: xss(map.map_name),
    map_string: xss(map.map_string),
    width: map.width,
    user_id: map.user_id,
});

mapRouter.post(
    "/",
    jsonBodyParser,
    ({ headers, body, app, url }, res, next) => {
        const user_id = AuthService.verifyJwt(
            headers.authorization.split("Bearer ")[1]
        )["user_id"];
        const { map_name, map_string, width } = body;
        const newMap = {
            map_name,
            map_string,
            width,
            user_id,
        };

        console.log(newMap);

        MapService.addMap(app.get("db"), newMap)
            .then((mapData) => {
                logger.info(`Map id ${mapData.id} created.`);
                res.status(201)
                    .location(`/maps/${mapData.id}`)
                    .json(serializeMap(mapData));
            })
            .catch(next);
    }
);

mapRouter.get(jsonBodyParser, (req, res, next) => {
    // console.log("url", req.headers.authorization.split('Bearer ')[1]);
    let user = AuthService.verifyJwt(
        req.headers.authorization.split("Bearer ")[1]
    )["user_id"];

    MapService.getUserNicknameAndMaps(req.app.get("db"), user)
        .then((arr) => {
            let nickname = arr[0][0].nickname;
            let maps = arr[1];
            res.json({ nickname, maps });
        })
        .catch(next);
});

module.exports = mapRouter;
