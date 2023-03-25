import config from "~/config";
import Home from "~/layouts/Home";

export const publicRoutes = [
    {path:config.routes.home, component:Home, layout:null}
]