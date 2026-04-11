const {generateAccessToken} = require('../../utils/auth')

let users = []

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail )

//Declarando metodos
const signup = (data) => {        //Esse "throw" trabalha como um return, porém, ele indica erros
    if (getUserByEmail(data.email)) throw new Error('email_existente')   

    users.push(data)
    return generateAccessToken({email : data.email})
}

const login = (data) => {
    const user = getUserByEmail(data.email)
    if(!user) throw new Error('email_nao_encontrado') 
    
    if (user.password !== data.password) throw new Error('senha_incorreta')
   
    return generateAccessToken({email : data.email})   
}

//Metodos para exportar ao chamar a classe
module.exports = {
    signup,
    login
}