import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response.handler";
import menuServices from "./menu.services";
import { MENU_RESPONSES } from "./menu.response";

const router = Router()

router.get('/test-api', (req: Request, response: Response, next: NextFunction) => {
    const result = "This is test api"
    response.send(new ResponseHandler(result));
});

router.post('/insert-one-item', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const menu = req.body;
        const result = await menuServices.create(menu)
        if (!result) throw MENU_RESPONSES.COULD_NOT_ENTER_DATA
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
});

router.get('/find-items', async (req, res, next) => {
    try {
        const filter = req.body;
        const results = await menuServices.find(filter);
        if (!results) {
            throw new Error("No matching items found.");
        }
        res.send(new ResponseHandler(results));
    } catch (err) {
        next(err);
    }
});

router.post('/insert-many-item', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const menus = req.body;
        const result = await menuServices.insertMany(menus)
        if (!result) throw MENU_RESPONSES.COULD_NOT_ENTER_DATA
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
});

router.patch('/update-price-by-percent', async (req : Request, res : Response, next : NextFunction)=>{
    const category = req.body;
    const {percent} = req.query;
    if(!(category || percent)){
        throw new ResponseHandler(null, "need category and percentage");
    }
    const result = await menuServices.updatePrice(category,Number(percent))
    if(!result) throw MENU_RESPONSES.COULD_NOT_ENTER_DATA;

    res.send(new ResponseHandler(result));

});

router.get('/categories', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {filterString} = req.query;
        if(!filterString){
            throw new ResponseHandler(null,"need a filter string")
        }
        const result = await menuServices.getCategory(filterString);
        if (!result) throw MENU_RESPONSES.COULD_NOT_FETCH_DATA
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
});


export default router;