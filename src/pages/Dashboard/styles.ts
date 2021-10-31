import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;
  font-size: 28px;
`;
