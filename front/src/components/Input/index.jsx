import { Container, ContainerInput } from "./styles";

export const Input = ({ icon: Icon, label, ...rest }) => {
  return (
    <Container>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <ContainerInput>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </ContainerInput>
    </Container>
  );
};
