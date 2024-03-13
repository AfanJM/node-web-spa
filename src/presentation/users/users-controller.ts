import { Request, Response } from "express"
import { prisma } from "../../data/postgres"
import { createUserDto, updateUSerDto } from "../../domain/dtos"

export class userController {

    // DI
    constructor() { }



    public getUsers = async (req: Request, res: Response) => {


        const users = await prisma.user.findMany()

        return res.status(200).json({ message: 'Users', users })
    }


    public findByOne = async (req: Request, res: Response) => {


        const id = +req.params.id

        if (isNaN(id)) return res.status(400).json({ message: 'id argument is not a number' })

        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if (!user) return res.status(404).json({ message: 'User not found' })

        return res.status(200).json({ message: 'User found', user })

    }

    public createUser = async (req: Request, res: Response) => {
        
        //tenemos un error o no -- le mandamos el body al dto
        const [error, CreateUserDto] = createUserDto.create(req.body)

        if(error) return res.status(400).json({error })

        //prisma
        const user = await prisma.user.create({

            data: CreateUserDto!

        })

        return res.status(200).json({ message: 'User created', user })
    }

    public updateUser = async(req: Request, res: Response) => {

        const id = +req.params.id

        const [error, UpdateUserDto] = updateUSerDto.create({...req.body, id})

        if(error) return res.status(400).json({error })

        const user = await prisma.user.update({
            
            where: {
                id: id
            }, 

            data: UpdateUserDto!.values
        })

        if (!user) return res.status(404).json({ message: 'User not found' })


        res.status(200).json({message: 'user updated successfully', UpdateUserDto})

    }


    public deleteUSer = async (req: Request, res: Response) => {

        const id = +req.params.id

        if (isNaN(id)) return res.status(400).json({ message: 'id argument is not a number' })

        const user = await prisma.user.delete({

            where: {
                id: id
            }
        })
        
        if (!user) return res.status(404).json({ message: 'User not found' })

        return res.status(200).json({ message: 'User deleted' })

    }

}