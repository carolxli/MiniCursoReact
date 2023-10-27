import { Intro } from "./components/intro/intro";
import { SobreNos } from "./components/sobre-nos/sobre-nos";
import { Cursos } from "./components/cursos/cursos";
import { Mapa } from "./components/mapa/mapa";
import { Duvidas } from "./components/duvidas/duvidas";
export const Home = () => {
  return (
    <>
      <Intro/>
      <SobreNos/>
      <Cursos/>
      <Mapa/>
      <Duvidas/>
    </>
  );
};
