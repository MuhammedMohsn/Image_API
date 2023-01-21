"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Processing_1 = __importDefault(require("../../Processing"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    // Query parmeters
    var filename = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    // Imgs pathes
    var inputImgPath = path_1.default.join(__dirname, 'images', "".concat(filename));
    var outputImgPath = path_1.default.join(__dirname, 'images', 'thumb', "".concat(path_1.default.basename(filename, '.jpg'), "_").concat(width, "_").concat(height, ".jpg"));
    // Validation the values of query parameters
    if (width < 5 || height < 5 || !/(\w+|\d+).jpg/gi.test(filename)) {
        //  message for user if he enters invalid query parameter
        res.status(404).send('please put valid query parmeters');
    }
    else {
        // check if the resized image is found before or not for caching
        fs_1.default.open(outputImgPath, 'r', function (err) {
            if (err) {
                (0, Processing_1.default)(inputImgPath, outputImgPath, height, width, res);
            }
            else {
                res.status(200).sendFile(outputImgPath);
            }
        });
    }
});
exports.default = routes;
