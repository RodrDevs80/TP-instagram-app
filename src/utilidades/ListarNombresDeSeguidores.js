import { buscarUserPorId } from "./buscarUserPorId";
import { buscarUserPorNombre } from "./buscarUserPorNombre";


export const ListarNombresDeSeguidores = (seguidores, usuarios, nombre) => {
    const u = buscarUserPorNombre(nombre, usuarios);
    if (u) {
        const s = seguidores.filter((item) => item.usuarioId === u.id);
        const nombresDeLosSeguidores = s.map((item) =>
            item.seguidores.map((i) => buscarUserPorId(i, usuarios).nombre)
        );

        return nombresDeLosSeguidores
    }
    return null;

}
