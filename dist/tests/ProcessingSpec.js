"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Processing_1 = __importDefault(require("../Processing"));
var path_1 = __importDefault(require("path"));
var height = 600;
var width = 300;
var inputImage = path_1.default.join(__dirname, 'images', '1.jpg');
var outputImage = path_1.default.join(__dirname, 'images', 'thumb', "encenadaport_".concat(width, "_").concat(height, ".jpg"));
it('if resizing process is done or not ', function () {
    expect((0, Processing_1.default)(inputImage, outputImage, height, width)).toBeTruthy();
});
