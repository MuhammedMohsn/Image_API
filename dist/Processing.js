"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
function image_processing(inputImagePath, outputImagePath, height, width, res) {
    (0, sharp_1.default)(inputImagePath)
        .resize(width, height)
        .toFile(outputImagePath, function (err) {
        //putting? to res to avoid access to undefined value if res object not passed to function
        if (err) {
            // message for user when there is an error when resizing of image
            res === null || res === void 0 ? void 0 : res.status(404).send('failure in processing,please select an existing image');
        }
        else {
            res === null || res === void 0 ? void 0 : res.status(200).sendFile(outputImagePath);
        }
    });
    return true;
}
exports.default = image_processing;
