import { buscarUserPorId } from "./buscarUserPorId";


export const verificarSeguidores = (seguidores, usuarios, userID, idSE) => {
    const x = seguidores
        .filter((item) => item.usuarioId === Number(userID))
        .map((item) =>
            item.seguidores.find((elemento) => elemento === Number(idSE))
        );
    //console.log(typeof x[0]);
    if (x.length === 0) {
        return null;
    } else {
        const usuario = buscarUserPorId(Number(userID), usuarios) ? buscarUserPorId(Number(userID), usuarios) : "no se encontró usuario";
        const seguidor = buscarUserPorId(Number(x[0]), usuarios) ? buscarUserPorId(Number(idSE), usuarios) : "no se encontró seguidor";
        if (userID !== idSE) {
            return {
                usuario,
                seguidor
            }
        } else {
            return {};
        }

    }
}
