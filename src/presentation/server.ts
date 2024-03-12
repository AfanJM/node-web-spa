import express, { Router } from 'express'

import path from 'path';


interface Options {

    port: number,
    public_path?: string,
    routes: Router
}

export class Server {

    private  app = express();

    private readonly port: number

    private readonly public_path: string

    private readonly routes: Router

    constructor(options: Options) {

        const {port, public_path = 'public', routes} = options

        this.port = port
        this.public_path = public_path
        this.routes = routes

    }


    async run() {

        //* middlewares ====
        this.app.use(express.json())
        
        this.app.use(express.urlencoded({ extended: true}))

        //** routes ====
        this.app.use( this.routes )

        //* public folder: sirvo el contenido estatico 
        this.app.use(express.static( this.public_path ))

      

        //sirvo todas las rutas del contendio estatico en mi back SPA
          this.app.get('*', (req, res) => {

            const indexPath = path.join(__dirname + `../../../${ this.public_path }/index.html`);

            res.sendFile(indexPath)

        })

       this.app.listen(this.port , () => {

        console.log(`server running on port ${this.port} `)
       })

    }


}