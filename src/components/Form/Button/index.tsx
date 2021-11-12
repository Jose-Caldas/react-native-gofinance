import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...res }: ButtonProps) {
  return (
    <Container {...res}>
      <Title>{title}</Title>
    </Container>
  );
}
