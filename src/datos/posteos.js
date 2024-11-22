export const posteos = [
    {
        id: 1,
        usuarioId: 1,
        contenido: "Mi viaje a la playa",
        likes: 12,
        comentarios: [
            { id: 1, usuarioId: 2, texto: "¡Qué lindas fotos!" },
            { id: 2, usuarioId: 3, texto: "Quiero ir también!" },
        ],
    },
    {
        id: 2,
        usuarioId: 2,
        contenido: "Nuevo proyecto de arte",
        likes: 20,
        comentarios: [
            { id: 3, usuarioId: 1, texto: "Increíble trabajo!" },
            { id: 4, usuarioId: 4, texto: "¡Inspirador!" },
        ],
    },
    {
        id: 3,
        usuarioId: 3,
        contenido: "Cena familiar",
        likes: 8,
        comentarios: [],
    },
    {
        id: 4,
        usuarioId: 4,
        contenido: "Amanecer en la montaña",
        likes: 15,
        comentarios: [
            { id: 5, usuarioId: 3, texto: "Hermoso paisaje" },
        ],
    },
    {
        id: 5,
        usuarioId: 1,
        contenido: "Terminando 1 año de la Tecnicatura",
        likes: 14,
        comentarios: [
            { id: 1, usuarioId: 2, texto: "¡Qué bueno te felicito!" },
            { id: 2, usuarioId: 3, texto: "Seguí asi!" },
            { id: 3, usuarioId: 3, texto: "Festejemos!" }
        ],
    }
];