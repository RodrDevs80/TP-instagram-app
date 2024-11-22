/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ListarNombresDeSeguidores } from "../utilidades/ListarNombresDeSeguidores";

export const Ejercicio4 = ({ seguidores, usuarios }) => {
  const [nombre3, setNombre3] = useState("");
  const [listSeguidores, setListSeguidores] = useState([]);

  useEffect(() => {
    const n = ListarNombresDeSeguidores(seguidores, usuarios, nombre3);
    //console.log(n);
    if (n) {
      setListSeguidores([...n]);
    } else {
      setListSeguidores([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombre3]);

  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        4- Listar seguidores de un usuario: Muestra los nombres de los usuarios
        que siguen a un usuario específico (por ejemplo, seguidores de Carlos).
      </h2>
      <h3></h3>
      <label htmlFor="nombre3">Ingrese el nombre:</label>
      <input
        className="border focus:outline-none border-red-500 p-2"
        type="text"
        id="nombre3"
        value={nombre3}
        onChange={(e) => setNombre3(e.target.value)}
      />
      <div className="flex justify-center items-center flex-col">
        <h3>Seguidores:</h3>
        {nombre3 === "" ? (
          <h3 className="font-bold">Buscar 🔍</h3>
        ) : listSeguidores.length === 0 ? (
          <h3 className="font-bold">Sin resultado 🚨❌</h3>
        ) : (
          listSeguidores.map((item, i) => (
            <div key={i}>
              <h3>
                <span className="font-bold">Nombres:</span> {item.join("-")}👥
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
