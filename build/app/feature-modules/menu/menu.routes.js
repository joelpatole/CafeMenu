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
const express_1 = require("express");
const response_handler_1 = require("../../utility/response.handler");
const menu_services_1 = __importDefault(require("./menu.services"));
const menu_response_1 = require("./menu.response");
const router = (0, express_1.Router)();
router.get('/test-api', (req, response, next) => {
    const result = "This is test api";
    response.send(new response_handler_1.ResponseHandler(result));
});
router.post('/insert-one-item', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = req.body;
        const result = yield menu_services_1.default.create(menu);
        if (!result)
            throw menu_response_1.MENU_RESPONSES.COULD_NOT_ENTER_DATA;
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (err) {
        next(err);
    }
}));
router.get('/find-items', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = req.params;
        const results = yield menu_services_1.default.find(filter);
        if (!results) {
            throw new Error("No matching items found.");
        }
        res.send(new response_handler_1.ResponseHandler(results));
    }
    catch (err) {
        next(err);
    }
}));
router.post('/insert-many-item', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = req.body;
        const result = yield menu_services_1.default.insertMany(menus);
        if (!result)
            throw menu_response_1.MENU_RESPONSES.COULD_NOT_ENTER_DATA;
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (err) {
        next(err);
    }
}));
router.patch('/update-price-by-percent', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.body;
    const { percent } = req.query;
    if (!(category || percent)) {
        throw new response_handler_1.ResponseHandler(null, "need category and percentage");
    }
    const result = yield menu_services_1.default.updatePrice(category, Number(percent));
    if (!result)
        throw menu_response_1.MENU_RESPONSES.COULD_NOT_ENTER_DATA;
    res.send(new response_handler_1.ResponseHandler(result));
}));
router.get('/categories', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filterString } = req.query;
        if (!filterString) {
            throw new response_handler_1.ResponseHandler(null, "need a filter string");
        }
        const result = yield menu_services_1.default.getCategory(filterString);
        if (!result)
            throw menu_response_1.MENU_RESPONSES.COULD_NOT_FETCH_DATA;
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
//# sourceMappingURL=menu.routes.js.map