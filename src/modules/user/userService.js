
//To usando esse array para salvar os usuários
let users = []

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail )

//Declarando metodos
const signup = (data) => {        //Esse "throw" trabalha como um return, porém, ele indica erros
    if (getUserByEmail(data.email)) throw new Error('email_existente')
    

    users.push(data)
    return true
}
//Metodos para exportar ao chamar a classe
module.exports = {
    signup
}