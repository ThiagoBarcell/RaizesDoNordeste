
//To usando esse array para salvar os usuários
let users = []

const getUserByEmail = (searchEmail) => users.find((obj) => obj.email === searchEmail )

//Declarando metodos
const signup = (data) => {
    if (getUserByEmail(data.email)) {
        console.log("Email ja cadastrado")
    } else {
        users.push(data)
    }
    return false
}
//Metodos para exportar ao chamar a classe
module.exports = {
    signup
}