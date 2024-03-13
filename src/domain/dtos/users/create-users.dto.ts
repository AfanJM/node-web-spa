//basicamente es la data que voy a mandar (DATA TRANSFER OBJECT) y es una clase

import e from "express"


export class createUserDto {
    
    private constructor(

        public readonly nombre: string
    ){}
    
    //metodo estatico en donde recibo las props (mi obj) y retorno un array con un string que es el errro o con la response
    static create ( props : {[key: string ]: any }): [string?, createUserDto?]{

        const {nombre} = props
        
        if(!nombre) return ['nombre is required', undefined]

        return [undefined, new createUserDto(nombre) ]
    }



}