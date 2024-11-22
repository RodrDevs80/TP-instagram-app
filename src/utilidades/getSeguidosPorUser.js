import { buscarUserPorId } from "./buscarUserPorId";
import { buscarUserPorNombre } from "./buscarUserPorNombre";

export const getSeguidosPorUser = (nombre, usuarios, seguidores) => {
    const seguidos = [];
    const E = buscarUserPorNombre(nombre, usuarios);
    if (!E) {
        return seguidos;
    } else {
        seguidores.forEach((element) => {
            element.seguidores.forEach((i) => {
                if (i == E.id) {
                    seguidos.push(buscarUserPorId(element.usuarioId, usuarios));
                }
            });
        });
        return seguidos;
    }

}
