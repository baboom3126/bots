const axios = require("axios");
const config = require("../config");

// read data from path
async function dbRead(path) {
    console.log('[INFO] dbRead path: '+path)

    const url = `https://${config.firebaseID}.firebaseio.com/${path}.json?auth=${config.firebaseSecret}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.log(err.response);
        return err;
    }
}

// write a new data in path under DB
async function dbWrite(path, data) {
    console.log('[INFO] dbWrite path: '+path)

    const url = `https://${config.firebaseID}.firebaseio.com/${path}.json?auth=${config.firebaseSecret}`;
    try {
        const res = await axios.put(url, data)
        return res.data;
    } catch (err) {
        console.log(err.response);
        return err;
    }
}

// push data to _path under DB
async function dbPush(_path, data) {
    console.log('[INFO] dbPush path: '+path)

    const timestamp = new Date().getTime();
    const path = `${_path}/${timestamp}`;
    const url = `https://${config.firebaseID}.firebaseio.com/${path}.json?auth=${config.firebaseSecret}`;
    try {
        const res = await axios.put(url, data)
        return res.data;
    } catch (err) {
        console.log(err.response);
        return null;
    }
}

module.exports.dbRead = dbRead;
module.exports.dbWrite = dbWrite;
module.exports.dbPush = dbPush;