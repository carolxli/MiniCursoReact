import { CardContent } from "./card-content";
import { Card,Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";
import { CardType } from "./types";

export const SobreNos = () => {

  const messages: CardType[]= CardContent()
  return (
    <>
        <Wrapper>
          <Title>Sobre Nós</Title>
          <SubTitle>console.log("Hello world")</SubTitle>
          {messages.map((item) => (
            <Card key={item.id}>
              <Message>{item.message}</Message>
            </Card>
          ))}
        </Wrapper>
    </>
  );
};
