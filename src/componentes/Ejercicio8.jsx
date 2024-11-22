/* eslint-disable react/prop-types */

import { getMasComentarios } from "../utilidades/getMasComentarios";

export const Ejercicio8 = ({ posteos, usuarios }) => {
  const usuarioConMasComentarios = [];
  usuarioConMasComentarios.push(getMasComentarios(usuarios, posteos));
  //console.log(usuarioConMasComentarios);
  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        8- Encontrar el usuario con más comentarios en total: Encuentra y
        muestra el nombre del usuario cuyos posteos han recibido la mayor
        cantidad total de comentarios.
      </h2>
      <h3>Usuario con mas comentarios:</h3>

      <div className="flex justify-center items-center flex-col">
        <div className="container">
          <table className="table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-4 text-center">Nombre</th>
                <th className="px-6 py-4 text-center">
                  Cantidad de Comentarios
                </th>
              </tr>
            </thead>
            {usuarioConMasComentarios.map((item, i) => (
              <tbody key={i}>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 text-center">{item.nombre}</td>
                  <td className="px-6 py-4 text-center">
                    {item.totalDeComentarios}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
