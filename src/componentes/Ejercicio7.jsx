/* eslint-disable react/prop-types */
import { getUserSinSeguidores } from "../utilidades/getUserSinSeguidores";

export const Ejercicio7 = ({ seguidores, usuarios }) => {
  const usuariosSinSeguidores = getUserSinSeguidores(seguidores, usuarios);

  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        7- Mostrar usuarios sin seguidores: Crea una lista de usuarios que no
        tienen ningún seguidor. Muestra sus nombres y usuarios.
      </h2>
      <h3>Lista de usuarios sin seguidores</h3>

      <div className="flex justify-center items-center flex-col">
        <div className="container">
          <table className="table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-4 text-center">Nombre</th>
                <th className="px-6 py-4 text-center">Usuario</th>
              </tr>
            </thead>
            {usuariosSinSeguidores.map((item, i) => (
              <tbody key={i}>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 text-center">{item.nombre}</td>
                  <td className="px-6 py-4 text-center">{item.usuario}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
