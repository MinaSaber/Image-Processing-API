"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var photo_1 = __importDefault(require("./api/photo"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    var imagesFilenames = fs_1.default
        .readdirSync(path_1.default.resolve('all/photos/Before'))
        .map(function (filename) { return filename.slice(0, -4); });
    res.render('index', { filenames: imagesFilenames });
});
router.use('/photos', photo_1.default);
exports.default = router;
