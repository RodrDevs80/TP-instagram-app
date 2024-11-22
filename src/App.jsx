import "./App.css";
import { Consigna } from "./componentes/Consigna";
import { Ejercicio1 } from "./componentes/Ejercicio1";
import { Ejercicio10 } from "./componentes/Ejercicio10";
import { Ejercicio2 } from "./componentes/Ejercicio2";
import { Ejercicio3 } from "./componentes/Ejercicio3";
import { Ejercicio4 } from "./componentes/Ejercicio4";
import { Ejercicio5 } from "./componentes/Ejercicio5";
import { Ejercicio6 } from "./componentes/Ejercicio6";
import { Ejercicio7 } from "./componentes/Ejercicio7";
import { Ejercicio8 } from "./componentes/Ejercicio8";
import { Ejercicio9 } from "./componentes/Ejercicio9";
import { posteos } from "./datos/posteos";
import { seguidores } from "./datos/seguidores";
import { usuarios } from "./datos/usuarios";

function App() {
  return (
    <>
      <Consigna />
      <Ejercicio1 usuarios={usuarios} posteos={posteos} />
      <Ejercicio2 usuarios={usuarios} posteos={posteos} />
      <Ejercicio3 posteos={posteos} />
      <Ejercicio4 seguidores={seguidores} usuarios={usuarios} />
      <Ejercicio5 usuarios={usuarios} posteos={posteos} />
      <Ejercicio6 seguidores={seguidores} usuarios={usuarios} />
      <Ejercicio7 seguidores={seguidores} usuarios={usuarios} />
      <Ejercicio8 posteos={posteos} usuarios={usuarios} />
      <Ejercicio9 usuarios={usuarios} seguidores={seguidores} />
      <Ejercicio10 posteos={posteos} usuarios={usuarios} />
    </>
  );
}

export default App;
