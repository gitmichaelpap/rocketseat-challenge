import { Container } from "./styles";

export const ButtonText = ({ children, ...rest }) => {
  return (
    <Container
      type="button"
      {...rest}
    >
      {children}
    </Container>
  );
};
