import { Router } from "express";

import { userController } from "./users-controller";



export class userRoutes {

    //get estatico
    static get routes(): Router {

        const router = Router();

        const controller = new userController()

        router.get('/', controller.getUsers)

        router.get('/:id', controller.findByOne)

        router.post('/', controller.createUser)

        router.put('/:id', controller.updateUser)

        router.delete('/:id', controller.deleteUSer)



        return router;


    }


}