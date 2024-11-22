export const buscarUserPorNombre = (nombre, vector) => {
    const resultado = vector.find((item) => item.nombre.toLowerCase() === nombre.toLowerCase());
    if (resultado) {
        return resultado;
    }
    return null;
};