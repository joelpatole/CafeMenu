"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
const menuSchema = new base_schema_1.BaseSchema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
});
exports.menuModel = (0, mongoose_1.model)("Menu", menuSchema);
//# sourceMappingURL=menu.schema.js.map