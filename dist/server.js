"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const fs = require("fs");
const PORT = 3000;
const httpsOptions = {
    key: fs.readFileSync('../config/key.pem'),
    cert: fs.readFileSync('../config/cert.pem')
};
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map