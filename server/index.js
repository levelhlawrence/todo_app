"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_ts_1 = require("./app/server.ts");
server_ts_1.app.get("/", (req, res) => {
    try {
        res.status(200).json({ message: "Hello World" });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
server_ts_1.app.listen(server_ts_1.PORT, () => {
    console.log(`listening on port ${server_ts_1.PORT}`);
    console.log(server_ts_1.PORT);
});
