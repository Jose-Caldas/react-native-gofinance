import React from "react";
import { Container, Category, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface CategorySelectButtonProps extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({
  title,
  ...res
}: CategorySelectButtonProps) {
  return (
    <Container {...res}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
