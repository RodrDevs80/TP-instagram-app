export const buscarUserPorId = (id, vector) => {
    const resultado = vector.find((item) => item.id === id);
    if (resultado) {
        return resultado;
    }
    return null;
};