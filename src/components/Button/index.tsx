import React, { FC } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";

const ContainerStyled = styled.button`
  &:hover {
    font-weight: bold;
  }
`;
const Container = tw(ContainerStyled)`
  w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200
`;

interface IButtonProps {
  label: string;
}

const Button: FC<IButtonProps> = ({ label }) => {
  return <Container>{label}</Container>;
};

export default Button;
