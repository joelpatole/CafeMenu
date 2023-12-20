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
Object.defineProperty(exports, "__esModule", { value: true });
const menu_schema_1 = require("./menu.schema");
const find = (filter) => menu_schema_1.menuModel.find(Object.assign({ isDeleted: false }, filter));
const findOne = (filter) => menu_schema_1.menuModel.findOne(Object.assign({ isDeleted: false }, filter));
const create = (menu) => menu_schema_1.menuModel.create(menu);
const update = (filter, data) => menu_schema_1.menuModel.updateMany(Object.assign({ isDeleted: false }, filter), data);
const createMany = (menus) => {
    return menu_schema_1.menuModel.insertMany(menus);
};
const distinct = (filterString) => __awaiter(void 0, void 0, void 0, function* () {
    return yield menu_schema_1.menuModel.distinct(filterString);
});
exports.default = {
    find,
    findOne,
    create,
    update,
    createMany,
    distinct
};
//# sourceMappingURL=menu.repo.js.map