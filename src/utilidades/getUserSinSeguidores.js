import { buscarUserPorId } from "./buscarUserPorId";


export const getUserSinSeguidores = (seguidores, usuarios) => {
    const sinSeguidores = seguidores.filter(
        (item) => item.seguidores.length === 0
    );
    const usuariosSinSeguidores = sinSeguidores.map((item) =>
        buscarUserPorId(item.usuarioId, usuarios)
    );
    return usuariosSinSeguidores;
}
