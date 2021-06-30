import React, { FC } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const ContainerStyled = styled.button`
  &:hover {
    font-weight: bold;
  }
`;
const Container = tw(ContainerStyled)`custom-button`;

export interface IButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ label, onClick }) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
