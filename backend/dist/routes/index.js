"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_1 = __importDefault(require("../services"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send({ "alive": true });
});
router.get('/characters', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // tslint:disable-next-line:no-console
        console.log(1);
        const result = yield services_1.default.getList();
        // tslint:disable-next-line:no-console
        console.log("result:", result);
        res.status(200).send({ result });
    }
    catch (error) {
        res.status(400).send({ error });
    }
}));
exports.default = router;
//# sourceMappingURL=index.js.map