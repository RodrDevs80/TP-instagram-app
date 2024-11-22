

export const getPosteoMasLikes = (posteos) => {
    let mayorCantidadLikes = 0;
    let maxPosteo;
    posteos.forEach((element) => {
        if (element.likes > mayorCantidadLikes) {
            mayorCantidadLikes = element.likes;
            maxPosteo = element;
        }
    });

    return maxPosteo;
}
