

export const contadorDeComentarios = (posteosPorUsuario) => {
    if (posteosPorUsuario) {
        const comentarios = posteosPorUsuario.reduce((acumulador, item) => acumulador + item.comentarios.length, 0);
        return comentarios;
    }
    return null;
}
