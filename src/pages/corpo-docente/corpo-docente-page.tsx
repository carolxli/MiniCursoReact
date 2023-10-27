import { CorpoDocente } from "@/entities/corpo-docente";
import { MainWrapper, ProfessorWrapper, Title, TitleWrapper } from "./corpo-docente-page.styles";
import { useEffect, useState } from "react"
import { CardItem } from "./components/card-item/card-item";

export const CorpoDocentePage = () => {
  const [listaProfessores, setListaProfessores] = useState<CorpoDocente[]>([]);
  const URL = "https://infoeste-back-end-fm89.vercel.app/";
  useEffect(() => {
    fetch(URL, {
      method: 'GET',
    }).then((response) => response.json()).then((value: { corpoDocente: CorpoDocente[] }) => {
      setListaProfessores(value.corpoDocente);
      console.log(value);
    });
  }, []);
  return (
    <>
      <MainWrapper>
        <TitleWrapper><Title>CORPO DOCENTE</Title></TitleWrapper>
        <ProfessorWrapper>
          {listaProfessores.sort((a, b) => {
            if (a.nome > b.nome)
              return 1;
            if (b.nome > a.nome)
              return -1;
            return 0;
          }).map((professor) => (<CardItem professor={professor} />))}
        </ProfessorWrapper>
      </MainWrapper>
    </>
  );
};
