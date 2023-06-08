"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterResize = exports.beforeResize = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var beforeResize = function (filename, height, width) {
    return sharp_1.default(path_1.default.resolve("all/photos/Before/" + filename + ".jpg"))
        .resize({
        width: width,
        height: height,
    })
        .toBuffer();
};
exports.beforeResize = beforeResize;
var afterResize = function (filename, height, width) {
    return "all/photos/After/" + filename + height + "x" + width + ".jpg";
};
exports.afterResize = afterResize;
