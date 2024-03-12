import { Request, Response } from "express"


const users = [
{ id: 1, nombre: 'juan sebastian', createdAt: new Date() },
{ id: 2, nombre: 'miriam mora', createdAt: null },
{ id: 3, nombre: 'dayling carolina', createdAt: new Date() },

]

export class userController {

    // DI
    constructor() { }



    public getUsers = (req: Request, res: Response) => {

       return  res.json(users)
    }


    public findByOne = (req: Request, res: Response) => {

       const id = +req.params.id

       if(isNaN(id)) return res.status(400).json({message: 'id argument is not a number'})

        const user = users.find(u => u.id === id)

        if(!user) return res.status(404).json({message: 'User not found'})

        return res.json(user)

    }

    public createUser = (req: Request, res: Response) => {

        const {nombre} = req.body

       if(!nombre) return res.status(400).json({message: 'nombre is required'})

       const user = {
           id: users.length + 1,
           nombre: nombre,
           createdAt: new Date()
       }

       users.push(user)

       return res.status(200).json({message:'User created', user})
    }

    public updateUser (req: Request, res: Response) {

        const id = +req.params.id

        if(isNaN(id)) return res.status(400).json({message: 'id argument is not a number'})

        const user = users.find(u => u.id === id)

        if(!user) return res.status(404).json({message: 'User not found'})

        const {nombre, createdAt} = req.body

        //if(!nombre) return res.status(400).json({message: 'nombre is required'})

        user.nombre = nombre || user.nombre;

        (createdAt === 'null')
            ? user.createdAt = null
            : user.createdAt = new Date(createdAt || user.createdAt);

        res.json(user)

    }


    public deleteUSer = (req: Request, res: Response) => {

        const id = +req.params.id

        if(isNaN(id)) return res.status(400).json({message: 'id argument is not a number'})

        const user = users.find(u => u.id === id)

        if(!user) return res.status(404).json({message: 'User not found'})

        users.splice(users.indexOf(user), 1)

        return res.status(200).json({message: 'User deleted'})

    }

}