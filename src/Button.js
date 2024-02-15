import styled from 'styled-components';

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Button = styled.button``;

const B1 = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;
`;

const B2 = styled.button`
  background-color: #6750a4;
  border: none;
  border-radius: ${({ round }) => (round ? `9999px` : `3px`)};
  color: #ffffff;
  font-size: ${({ size }) => SIZES[size] ?? SIZES['medium']}px;
  padding: 16px;

  &:hover,
  &:active {
    background-color: #463770;
  }
`;

Button.B1 = B1;
Button.B2 = B2;

export default Button;
