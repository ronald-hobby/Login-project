import { Method, callApi,} from './NetworkManager'
import { api } from './Environment'
export const signin = async ({ email,password}) => {
    
    const data = { email,password }
    
    const response = await callApi(api.login, Method.POST, data, false, false)
   return response
}
