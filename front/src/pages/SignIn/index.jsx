import { Link } from "react-router-dom";

import { Container, Form, Logo } from "./styles";

import Polygon from "@/assets/polygon.svg?react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
const SignIn = () => {
  return (
    <Container>
      <Form>
        <Logo>
          <Polygon />
          {"food explorer"}
        </Logo>

        <Input
          id={"email"}
          type={"text"}
          label={"E-mail"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />
        <Input
          id={"password"}
          type={"password"}
          label={"Senha"}
          placeholder={"No mínimo 6 caracteres"}
        />

        <Button title={"Entrar"} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
};

export default SignIn;
