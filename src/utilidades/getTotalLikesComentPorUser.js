import { contadorDeComentarios } from "./contadorDeComentarios";
import { contadorDeLikes } from "./contadorDeLikes";
import { getPosteosPorNameUser } from "./getPosteosPorNameUser";


export const getTotalLikesComentPorUser = (posteos, usuarios, nombre) => {
    const pxU = getPosteosPorNameUser(posteos, usuarios, nombre);
    if (!pxU) {
        return {};
    }
    const likes = contadorDeLikes(pxU);
    const comentarios = contadorDeComentarios(pxU);

    return {
        nombre,
        totalDeLikes: likes,
        totalDeComentarios: comentarios
    }
}
