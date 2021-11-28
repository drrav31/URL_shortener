import {Router} from "express";

const route = Router();

route.get('/', (req: any, res: any) => {
    res.send("you have come to GET /urls")

})

export default route