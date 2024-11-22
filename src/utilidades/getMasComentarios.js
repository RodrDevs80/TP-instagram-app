import { getTotalLikesComentPorUser } from "./getTotalLikesComentPorUser";


export const getMasComentarios = (usuarios, posteos) => {
    let m = 0;
    let userMasC;
    usuarios.forEach((element) => {
        if (
            getTotalLikesComentPorUser(posteos, usuarios, element.nombre)
                .totalDeComentarios > m
        ) {
            m = getTotalLikesComentPorUser(
                posteos,
                usuarios,
                element.nombre
            ).totalDeComentarios;
            userMasC = getTotalLikesComentPorUser(posteos, usuarios, element.nombre);
        }
    });

    return userMasC;
}
