import { Route } from "./routes.types";
import routers from './routes.index'

export const routes : Route[] = [
    new Route("/menu", routers.MenuRouter),
]