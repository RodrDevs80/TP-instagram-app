/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getSeguidosPorUser } from "../utilidades/getSeguidosPorUser";

export const Ejercicio9 = ({ usuarios, seguidores }) => {
  const [entrada, setEntrada] = useState("");
  const [seguidos, setSeguidos] = useState([]);
  useEffect(() => {
    const seg = getSeguidosPorUser(entrada, usuarios, seguidores);
    if (seg) {
      setSeguidos([...seg]);
    } else {
      setSeguidos([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrada]);
  // console.log(seguidos);
  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        9- Listar los nombres de usuarios que un usuario específico sigue:
        Muestra los nombres de los usuarios a los que un usuario sigue (por
        ejemplo, a quién sigue Jose).
      </h2>
      <h3>Buscar usuarios seguidos por un usuario particular:</h3>
      <label htmlFor="entrada">Ingrese el nombre del usuario:</label>
      <input
        className="border focus:outline-none border-red-500 p-2 w-1/3"
        type="text"
        id="entrada"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      />
      <div className="flex justify-center items-center flex-col">
        <h3>El usuario sigue a:</h3>
        {seguidos.length === 0
          ? "No se encontraron seguidos!❌"
          : seguidos.map((item) => (
              <div key={item.id}>
                <h3>
                  <span>📳</span>
                  {item.nombre}
                </h3>
              </div>
            ))}
      </div>
    </div>
  );
};
