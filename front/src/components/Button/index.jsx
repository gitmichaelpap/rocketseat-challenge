import { TbReceipt } from "react-icons/tb";

import { Container } from "./styles";

export const Button = ({ title, loading = false, isCustomer, ...rest }) => {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {isCustomer && <TbReceipt size={"3.2rem"} />}
      {loading ? "Carregando..." : title}
      {isCustomer && (
        <span>{isDesktop ? `(${rest.orderCount})` : rest.orderCount}</span>
      )}
    </Container>
  );
};
