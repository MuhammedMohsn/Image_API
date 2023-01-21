"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./Routes/api/images"));
var app = (0, express_1.default)();
exports.port = 3000;
app.listen(exports.port, function () {
    console.log("Running server on PORT 3000...");
});
app.get('/', function (req, res) {
    res.status(200).send('home page');
});
app.use('/images', images_1.default);
exports.default = app;
