import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import theme from "../../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 18px;
  border-radius: 5px;

  justify-content: flex-end;
`;

export const Icon = styled(Feather)``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
