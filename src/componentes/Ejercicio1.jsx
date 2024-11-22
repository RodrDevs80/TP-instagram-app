/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { contadorDeLikes } from "../utilidades/contadorDeLikes";
import { getPosteosPorNameUser } from "../utilidades/getPosteosPorNameUser";

export const Ejercicio1 = ({ usuarios, posteos }) => {
  const [nombre, setNombre] = useState("");
  const [actividadDelUser, setActividadDelUser] = useState({});

  useEffect(() => {
    const pxUser = getPosteosPorNameUser(posteos, usuarios, nombre);
    const likes = contadorDeLikes(pxUser);
    if (!pxUser) {
      setActividadDelUser({});
    } else {
      const u = {
        nombre,
        cantidadDePosteos: pxUser.length,
        totalLike: likes,
      };
      setActividadDelUser(u);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombre]);

  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        1-Mostrar un resumen de la actividad de un usuario: Crea una función que
        muestre un resumen de la actividad de un usuario, incluyendo la cantidad
        de posteos, el total de likes en sus posteos.
      </h2>
      <h3>Ver actividad del siguiente usuario:</h3>
      <label htmlFor="nombre">Ingrese el nombre:</label>
      <input
        className="border focus:outline-none border-red-500 p-2"
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <div className="flex justify-center items-center flex-col">
        {Object.keys(actividadDelUser).length === 0 ? (
          <h3 className="font-bold">No se encontró actividad</h3>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-bold">Resumen de la actividad de un usuario</h2>
            <h3>
              <span className="font-bold">Nombre del Usuario:</span>{" "}
              {actividadDelUser.nombre} 😎
            </h3>
            <h3>
              <span className="font-bold">Posteos:</span>{" "}
              {actividadDelUser.cantidadDePosteos} 💈
            </h3>
            <h3>
              <span className="font-bold">Total de Likes:</span>{" "}
              {actividadDelUser.totalLike} 👍
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
