/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getTotalLikesComentPorUser } from "../utilidades/getTotalLikesComentPorUser";

export const Ejercicio10 = ({ posteos, usuarios }) => {
  const [entrada2, setEntrada2] = useState("");
  const [userTotales, setUserTotales] = useState({});

  useEffect(() => {
    const z = getTotalLikesComentPorUser(posteos, usuarios, entrada2);
    setUserTotales(z);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrada2]);
  //console.log(userTotales);
  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        10- Calcular el total de likes y comentarios recibidos por un usuario en
        todos sus posteos: Suma la cantidad de likes y el total de comentarios
        de todos los posteos de un usuario específico y muestra el resultado.
      </h2>
      <h3>Total de likes y comentarios</h3>
      <label htmlFor="entrada2">Ingrese el nombre del usuario:</label>
      <input
        className="border focus:outline-none border-red-500 p-2 w-1/3"
        type="text"
        id="entrada2"
        value={entrada2}
        onChange={(e) => setEntrada2(e.target.value)}
      />
      <div className="flex justify-center items-center flex-col">
        {Object.keys(userTotales).length === 0 ? (
          "No hay resultados!🚨"
        ) : (
          <div className="flex justify-center items-center flex-col">
            <h3>
              <span className="font-bold text-cyan-700 m-1">Nombre:</span>
              {userTotales.nombre}
            </h3>
            <h3>
              <span className="font-bold text-cyan-700 m-1">
                Total de Likes:
              </span>
              {userTotales.totalDeLikes} 👍
            </h3>
            <h3>
              <span className="font-bold text-cyan-700 m-1">
                Total de Comentarios:
              </span>
              {userTotales.totalDeComentarios} 📢
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
