import { buscarUserPorId } from "./buscarUserPorId";


export const findUserMasComentarios = (posteos, usuarios) => {
    let arreglo = [];
    let mayor = 0;
    posteos.map((item) => {
        if (item.comentarios.length > mayor || item.comentarios.length == mayor) {
            mayor = item.comentarios.length;
            arreglo.push(item);
        }
    });
    const result = arreglo.map((item) => ({
        nombre: buscarUserPorId(item.usuarioId, usuarios).nombre,
        cantidadC: item.comentarios.length,
    }));
    return result;
}
