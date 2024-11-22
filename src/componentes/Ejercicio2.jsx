/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getPosteosPorNameUser } from "../utilidades/getPosteosPorNameUser";

export const Ejercicio2 = ({ usuarios, posteos }) => {
  const [userName, setUserName] = useState("");
  const [p, setP] = useState([]);
  useEffect(() => {
    const pxUser = getPosteosPorNameUser(posteos, usuarios, userName);
    //console.log(pxUser);
    if (pxUser) {
      setP([...pxUser]);
    } else {
      setP([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        2- Filtrar posteos de un usuario específico: Muestra los posteos
        realizados por un usuario particular (por ejemplo, posteos de Ana).
      </h2>
      <h3>Ver posteos por usuario:</h3>
      <label htmlFor="nombre2">Ingrese el nombre:</label>
      <input
        className="border focus:outline-none border-red-500 p-2"
        type="text"
        id="nombre2"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div className="flex justify-center items-center flex-col">
        {p.length === 0 ? (
          <h3 className="font-bold">no hay posteos</h3>
        ) : (
          p.map((item) => (
            <div
              className="flex justify-center items-center flex-col"
              key={item.id}
            >
              <h4>
                {" "}
                <span className="font-bold">Usuario:</span> {userName}
              </h4>
              <h4>
                <span className="font-bold">Posteo:</span> {item.contenido}📝
              </h4>
              <h4>
                <span className="font-bold">👍:</span>: {item.likes}
              </h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
