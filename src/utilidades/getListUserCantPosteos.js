import { buscarUserPorId } from "./buscarUserPorId";
import { getPosteosPorNameUser } from "./getPosteosPorNameUser";


export const getListUserCantPosteos = (usuarios, posteos) => {
    const cantidadDePosteosPorUsuario = [];
    usuarios.forEach((element) => {
        cantidadDePosteosPorUsuario.push({
            nombre: buscarUserPorId(element.id, usuarios).nombre,
            cantidadDePosteos: getPosteosPorNameUser(
                posteos,
                usuarios,
                buscarUserPorId(element.id, usuarios).nombre
            ).length,
        });
    });
    return cantidadDePosteosPorUsuario
}
