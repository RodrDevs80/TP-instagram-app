/* eslint-disable react/prop-types */
import { getListUserCantPosteos } from "../utilidades/getListUserCantPosteos";

export const Ejercicio5 = ({ usuarios, posteos }) => {
  const cantidadDePosteosPorUsuario = getListUserCantPosteos(usuarios, posteos);
  return (
    <div className="ejercicio-1 flex justify-center items-center flex-col w-2/3 p-10 border-orange-600 rounded-md border-[2px] gap-2">
      <h2 className="font-bold">
        {" "}
        5- Mostrar nombres de usuarios junto con el total de posteos: Crea una
        lista que muestre los nombres de los usuarios y cuántos posteos ha hecho
        cada uno
      </h2>
      <h3>Lista de usuarios con sus posteos</h3>

      <div className="flex justify-center items-center flex-col">
        <div className="container">
          <table className="table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-4 text-center">Nombre</th>
                <th className="px-6 py-4 text-center">Cantidad de posteos</th>
              </tr>
            </thead>
            {cantidadDePosteosPorUsuario.map((item, i) => (
              <tbody key={i}>
                <tr className="bg-gray-100">
                  <td className="px-6 py-4 text-center">{item.nombre}</td>
                  <td className="px-6 py-4 text-center">
                    {item.cantidadDePosteos}
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
