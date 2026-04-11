let posts = []

// Adicionando o parametro data
const createPost = (data, user) => {
    console.log({
        data,user
    })

    const post = {
        createdBy: user.email,
        ...data //Passa o data direto
    }
    
    posts.push(post)
    return post

}

const getPosts = (id) => {
    if( id ){
        const post = posts[id]
        if (!post) throw new Error('post_nao_existe')
        return post    

        //aqui vai procurar pelo post
    }
    return posts
}

module.exports = {
    createPost,
    getPosts
}