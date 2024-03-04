import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, ContainerInputs, Form, Logo, Title } from "./styles";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo as ILogo } from "@/components/Logo";
import { api } from "@/services/api";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((e) => {
        if (e.response) {
          alert(e.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  };

  return (
    <Container>
      <Form>
        <Logo>
          <ILogo />
        </Logo>

        <ContainerInputs>
          <Title>Crie sua conta</Title>
          <Input
            id={"nome"}
            type={"text"}
            label={"Nome"}
            placeholder={"Exemplo: Maria da Silva"}
            onChange={(e) => setName(e.target.value)}
          />
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
            title={"Criar conta"}
            onClick={handleSignUp}
          />

          <Link to="/">Voltar para o login</Link>
        </ContainerInputs>
      </Form>
    </Container>
  );
};

export default SignUp;
