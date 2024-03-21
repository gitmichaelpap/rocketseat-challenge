import { AddBtn, Container, Qntd, RemBtn } from "./styles";

export const AddRemove = ({ title, loading = false, ...rest }) => {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      <RemBtn
        type="button"
        disabled={loading}
        {...rest}
      >
        -
      </RemBtn>
      <Qntd
        type="button"
        disabled={loading}
        {...rest}
      >
        00
      </Qntd>
      <AddBtn
        type="button"
        disabled={loading}
        {...rest}
      >
        +
      </AddBtn>
    </Container>
  );
};
