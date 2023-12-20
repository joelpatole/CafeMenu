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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_repo_1 = __importDefault(require("./menu.repo"));
const menu_response_1 = require("./menu.response");
const find = (filter) => menu_repo_1.default.find(Object.assign({}, filter));
const findOne = (filter) => menu_repo_1.default.findOne(Object.assign({}, filter));
const create = (menu) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingItem = yield menu_repo_1.default.findOne({
            name: menu.name,
            category: menu.category
        });
        if (existingItem) {
            throw menu_response_1.MENU_RESPONSES.MENU_ALREADY_EXIST;
        }
        const result = yield menu_repo_1.default.create(menu);
        return result;
    }
    catch (err) {
        throw err;
    }
});
const insertMany = (menus) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield menu_repo_1.default.createMany(menus);
        return result;
    }
    catch (err) {
        throw err;
    }
});
const updatePrice = (category, percentage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield menu_repo_1.default.find(category);
        let updatedData = [];
        for (let i = 0; i < data.length; i++) {
            console.log(`original price ${data[i].price}`);
            data[i].price = data[i].price + ((percentage / 100) * data[i].price);
            console.log(`new price ${data[i].price}`);
        }
        updatedData = data;
        const result = yield menu_repo_1.default.update(category, updatedData);
        console.log(`result ${result}`);
        return result;
    }
    catch (err) {
        throw err;
    }
});
const getCategory = (filterString) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield menu_repo_1.default.distinct(filterString);
        return data;
    }
    catch (err) {
    }
});
exports.default = {
    create,
    find,
    findOne,
    insertMany,
    updatePrice,
    getCategory
};
//# sourceMappingURL=menu.services.js.map