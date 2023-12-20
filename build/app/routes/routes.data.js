"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_types_1 = require("./routes.types");
const routes_index_1 = __importDefault(require("./routes.index"));
exports.routes = [
    new routes_types_1.Route("/menu", routes_index_1.default.MenuRouter),
];
//# sourceMappingURL=routes.data.js.map