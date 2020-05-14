"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const port = process.env.PORT || 8080; // default port to listen
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('', routes_1.default);
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Backend API is live: http://localhost:${port}`));
//# sourceMappingURL=index.js.map