import { useEffect, useState } from "react";
import { getPosteoMasLikes } from "../utilidades/getPosteoMasLikes";

/* eslint-disable react/prop-types */
export const Ejercicio3 = ({ posteos }) => {
  // console.log(posteos);
  const [masLikesp, setMasLikesP] = useState({});
  const [comentarios, setComentarios] = useState([]);
  useEffect(() => {
    const mas = getPosteoMasLikes(posteos);
    setMasLikesP(mas);
    setComentarios(mas.comentarios);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //console.log(comentarios);
  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        3- Buscar el posteo con más likes: Encuentra y muestra el posteo que ha
        recibido la mayor cantidad de likes.
      </h2>
      <h3>El posteo con mas likes es:</h3>

      <div className="flex justify-center items-center flex-col">
        <h3>
          <span className="font-bold">ID-POSTEO: </span>
          {masLikesp.id}
        </h3>
        <h3>
          <span className="font-bold">ID-USER: </span>
          {masLikesp.usuarioId}
        </h3>
        <h3 className="bg-cyan-500 p-1 rounded-md">
          <span className="font-bold">Contenido: </span>
          {masLikesp.contenido} <span>🥇</span>
        </h3>
        <h3>
          <span className="font-bold">Likes: </span>
          {masLikesp.likes}👍
        </h3>
        <h3 className="font-bold">Comentarios:</h3>
        {comentarios.map((item, i) => (
          <ol key={i}>
            <li className="bg-green-400 m-2 p-1 rounded-md">{item.texto}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};
