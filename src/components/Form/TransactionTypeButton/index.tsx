import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

export default function TransactionTypeButton({
  title,
  type,
  isActive,
  ...res
}: TransactionTypeButtonProps) {
  return (
    <Container {...res} isActive={isActive} type={type}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
