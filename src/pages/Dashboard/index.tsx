import React from "react";
import { HighLightCard } from "../../components/HighLightCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
  HighLightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/70762440?v=4",
              }}
            />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>José Caldas</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada 13 de abril"
          type="up"
        />
        <HighLightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighLightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighLightCards>
    </Container>
  );
}
