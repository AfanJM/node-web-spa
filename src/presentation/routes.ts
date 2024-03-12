// TODAS LAS RUTAS EN GENERAL


import { Router } from "express";

import { userRoutes } from "./users/user-routes";


export class routes {


    static get routes(): Router {

        const router = Router()

       router.use('/api/users', userRoutes.routes  )

       return router;



    }

}