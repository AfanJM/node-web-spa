

export class updateUSerDto {

    private constructor(    

        public readonly id: number,
        private readonly nombre?: string,
        private createdAt?: Date

    ){}

    //getter: valores que queremos recibir
    get values( ) {

        const returnObj : {[ key: string ]: any} = { }

        if(this.nombre) returnObj.nombre = this.nombre

        if(this.createdAt) returnObj.createdAt = this.createdAt

        return returnObj

    }

    static create (props:  {[key: string]: any}) : [string?, updateUSerDto?] {

        const {id, nombre, createdAt} = props

        if(!id || isNaN(Number(id)) ) return ['id must be a valid number - id is required', undefined]

        let newCreatedAt = createdAt

        if(createdAt) {

             newCreatedAt = new Date(createdAt)

            if(newCreatedAt.toString() === 'Invalid Date') {

                 return ['CreatedAt must be a valid date', undefined]
            }

        }

        return [undefined, new updateUSerDto(id, nombre, newCreatedAt)];
    }


}