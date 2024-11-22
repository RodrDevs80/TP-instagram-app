export const contadorDeLikes = (posteosPorUsuario) => {
    if (posteosPorUsuario) {
        const likes = posteosPorUsuario.reduce((acumulador, item) => acumulador + item.likes, 0);
        return likes;
    }
    return null;
}