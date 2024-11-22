import { buscarUserPorNombre } from "./buscarUserPorNombre"

export const getPosteosPorNameUser = (posteos, usuarios, nombre) => {
    const user = buscarUserPorNombre(nombre, usuarios);
    if (user) {
        return posteos.filter((p) => p.usuarioId === user.id)
    }
    return null;
}