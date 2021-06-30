export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/cadastro')
}

export const goToPost = (history, id) => {
    history.push(`/detalhes/${id}`)
}

export const goToFeed = (history) => {
    history.push('/')
}
