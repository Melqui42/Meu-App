import TextButton from "../../Components/TextButton/Index";
import ButtonGoogle from "../../Components/ButtonGoogle/Index";
import ButtonGreen from "../../Components/ButtonGreen/Index";
import InputType1 from "../../Components/InputType1/Index";

import * as C from "./Style";

export default function Login() {
  return (
    <C.Container>
      <C.Center>
        <C.Top>
          <C.Title>Login</C.Title>
          <C.SubTitle>Faça login para continuar.</C.SubTitle>
        </C.Top>
        <C.Form>
          <InputType1
            Style={{ marginBottom: 20 }}
            SecureTextEntry={false}
            Value={false}
            Label="E-mail:"
            Placeholder="Insira seu email..."
          />
          <InputType1 SecureTextEntry={true} Value={true} Label="Senha:" Placeholder="Insira sua senha..." />
          <TextButton Style={{ marginTop: 15 }} Text1="Recuperar senha">
            Esqueceu sua senha?{" "}
          </TextButton>
        </C.Form>
        <C.Buttons>
          <ButtonGreen>Entrar</ButtonGreen>
          <ButtonGoogle>Entrar com Google</ButtonGoogle>
        </C.Buttons>
        <TextButton Style={{ alignItems: "center" }} Text1="Criar uma conta">
          Não tem uma conta?{" "}
        </TextButton>
      </C.Center>
    </C.Container>
  );
}
