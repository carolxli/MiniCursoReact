import { Image, CursoWrapper, TipoCurso, TiposWrapper, Title, View, Wrapper, NomeCurso } from "./cursos.styles";
import { useState } from "react"
import BachareladoImg from "../../../../assets/images/graduacao.png"
import TecnologoImage from "../../../../assets/images/tec.png"
import PosGraduacaoImg from "../../../../assets/images/pos.png"
export const Cursos = () => {
  const [numCurso, setNumCurso] = useState(0);


  return (
    <>
      <Title>Cursos</Title>
      <Wrapper>
        <TiposWrapper>
          <TipoCurso onClick={() => setNumCurso(0)}>Bacharelado</TipoCurso>
          <TipoCurso onClick={() => setNumCurso(1)}>Tecnologo</TipoCurso>
          <TipoCurso onClick={() => setNumCurso(2)}>Pós-Graduação</TipoCurso>
        </TiposWrapper>
        <CursoWrapper>
          {
            numCurso == 0 && (
              <>
                <Image src={BachareladoImg} />
                <View>
                  <NomeCurso>Ciência da Computação</NomeCurso>
                  <NomeCurso>Sistemas de Informação</NomeCurso>
                  <NomeCurso>Engenharia de Software (EAD)</NomeCurso>
                </View>
              </>
            )}

          {
            numCurso == 1 && (
              <>
                <Image src={TecnologoImage} />
                <View>
                  <NomeCurso>Análise e Desenvolvimento de Sistemas</NomeCurso>
                  <NomeCurso>Redes de Computadores</NomeCurso>
                  <NomeCurso>Jogos Digitais</NomeCurso>
                  <NomeCurso>Gestão da Tecnologia da Informação</NomeCurso>
                </View>
              </>
            )}

          {
            numCurso == 2 && (
              <>
                <Image src={PosGraduacaoImg} />
                <View>
                  <NomeCurso>Data Sciences</NomeCurso>
                  <NomeCurso>Desenvolvimento de Aplicações Web</NomeCurso>
                  <NomeCurso>Segurança da Informação</NomeCurso>
                </View>
              </>
            )}

        </CursoWrapper>
      </Wrapper>
    </>
  );
};
