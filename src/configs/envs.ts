import 'dotenv/config'
import {get} from 'env-var'

export const envs = {

    PORT: get('port').required().asPortNumber(),
    PUBLIC_PATH: get('publicPath').default('public').asString()


}