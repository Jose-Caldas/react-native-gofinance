import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  padding: 16px 18px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title_dark};
  border-radius: 5px;
  margin-bottom: 8px;
`;
