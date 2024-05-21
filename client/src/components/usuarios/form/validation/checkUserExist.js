import { GET } from "../../../../api/users";

export const checkUserExist = async (value) => {
    if(!value) throw new Error('Campo requerido')
    const params = { username: value }
    const users = await GET({params })
    if(users.length) throw new Error('Usuario ya existe')
    return 
}