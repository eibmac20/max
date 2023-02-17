"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
let todos = [
    {
        name: "Test", description: "Lorem ipsum ..."
    },
    {
        name: "Have Fun", description: "Enjoy my holidays!!!"
    }
];
router.get('/', (req, res) => {
    res.send(todos);
});
module.exports = router;
