import logoR from "../assets/img/logoReact.svg";
import logoI from "../assets/img/logoInstagram.svg";
export const Consigna = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-1 w-2/3 p-10 border-orange-600 rounded-md border-[2px]">
      <h2 className="font-bold text-xl">Trabajo Practico</h2>
      <h1 className="font-bold">APP tipo Instagram</h1>
      <span>
        <img src={logoI} width={"80px"} alt="logo instagram" />
      </span>
      <h2 className="font-bold">PROGRAMACIÓN WEB 1</h2>
      <span>
        <img
          className="logo-react"
          src={logoR}
          width={"80px"}
          alt="logo react"
        />
      </span>
      <h3>
        <span className="font-bold">Profesor:</span> Pablo Aronna 👨‍🏫
      </h3>
      <h3>
        <span className="font-bold">Alumno:</span> Carlos E. Rodriguez 👨‍💻
      </h3>
    </div>
  );
};
