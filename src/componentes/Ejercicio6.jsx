/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { verificarSeguidores } from "../utilidades/verificarSeguidores";

export const Ejercicio6 = ({ seguidores, usuarios }) => {
  //console.log(seguidores);
  const [userID, setUserID] = useState(0);
  const [idSE, setIdSE] = useState(0);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const verificado = verificarSeguidores(seguidores, usuarios, userID, idSE);
    if (verificado) {
      //console.log(verificado);
      setResultado(verificado);
    } else {
      //console.log(verificado);
      setResultado({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID, idSE]);
  //console.log(resultado);
  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        6- Verificar si un usuario sigue a otro: Dado un par de IDs de usuario,
        verifica si uno sigue al otro (por ejemplo, si Ana sigue a Carlos).
      </h2>
      <h3>Verificar si un usuario sigue a otro:</h3>
      <label htmlFor="idUser">Ingrese el ID del usuario:</label>
      <input
        className="border focus:outline-none border-red-500 p-2 w-1/3"
        type="number"
        id="idUser"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <label htmlFor="idSeguidor">Ingrese el ID del seguidor :</label>
      <input
        className="border focus:outline-none border-red-500 p-2 w-1/3"
        type="number"
        id="idSeguidor"
        value={idSE}
        onChange={(e) => setIdSE(e.target.value)}
      />

      <div className="flex justify-center items-center flex-col">
        {Object.keys(resultado).length === 0 ? (
          "Buscar ☝ 🔍"
        ) : resultado.usuario === "no se encontró usuario" &&
          resultado.seguidor === "no se encontró seguidor" ? (
          " no hay registros 📝"
        ) : resultado.usuario === "no se encontró usuario" ? (
          "No existe el Usuario 🚨"
        ) : resultado.seguidor === "no se encontró seguidor" ? (
          `El usuario : ${resultado.usuario.nombre} no es seguido por el id del seguidor consultado`
        ) : (
          <div>
            <h3>
              <span className="font-bold">El usuario:</span>{" "}
              {resultado.usuario.nombre} 😎
            </h3>
            <h3>
              <span className="font-bold">Es seguido por :</span>{" "}
              {resultado.seguidor.nombre}{" "}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
