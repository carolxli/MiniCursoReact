import { CorpoDocente } from "@/entities/corpo-docente";
import { MainWrapper, NameWrapper, Name, TitleWrapper, Title, ImageWrapper, ProfessorImage, FormationWrapper, Formation, EmailWrapper, Email } from "./card-item.styles";


type Props = {
  professor: CorpoDocente;
};

export const CardItem = ({ professor }: Props) => {
  return (
    <>
      <MainWrapper>
        <NameWrapper><Name>{professor.nome}</Name></NameWrapper>
        <TitleWrapper><Title>{professor.titulacao}</Title></TitleWrapper>
        <ImageWrapper><ProfessorImage src={professor.foto}/></ImageWrapper>
        <FormationWrapper><Formation>{professor.graduacao}</Formation></FormationWrapper>
        <EmailWrapper><Email>{professor.email}</Email></EmailWrapper>
      </MainWrapper>
    </>
  );
};
