import { NextFC } from 'next';
import styled from '@emotion/styled';

const ButtonStyled = styled('button')`
  color: ${props => props.theme.colors.primary};
`;

const Button: NextFC = () => {
  return <ButtonStyled> Click me </ButtonStyled>;
};

export default Button;
