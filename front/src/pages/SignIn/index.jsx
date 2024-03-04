import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, ContainerInputs, Form, Logo, Title } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo as ILogo } from "@/components/Logo";
import { useAuth } from "@/hooks/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <Container>
      <Form>
        <Logo>
          <ILogo />
        </Logo>

        <ContainerInputs>
          <Title>Faça login</Title>
          <Input
            id={"email"}
            type={"text"}
            label={"E-mail"}
            placeholder={"Exemplo: exemplo@exemplo.com.br"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id={"password"}
            type={"password"}
            label={"Senha"}
            placeholder={"No mínimo 6 caracteres"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            title={"Entrar"}
            onClick={handleSignIn}
          />

          <Link to="/register">Criar uma conta</Link>
        </ContainerInputs>
      </Form>
    </Container>
  );
};

export default SignIn;
