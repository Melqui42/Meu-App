import TextButton from "../../Components/TextButton/Index";
import ButtonGreen from "../../Components/ButtonGreen/Index";
import InputType1 from "../../Components/InputType1/Index";

import * as C from "./Style";

export default function CreateAccount() {
  return (
    <C.Container>
      <C.Center>
        <C.Top>
          <C.Title>Criar conta </C.Title>
          <C.SubTitle>Crie sua conta para continuar.</C.SubTitle>
        </C.Top>
        <C.Form>
          <InputType1
            Style={{ marginBottom: 20 }}
            SecureTextEntry={false}
            Value={false}
            Label="Nome:"
            Placeholder="Insira seu nome..."
          />
          <InputType1
            Style={{ marginBottom: 20 }}
            SecureTextEntry={false}
            Value={false}
            Label="E-mail:"
            Placeholder="Insira um email..."
          />
          <InputType1 SecureTextEntry={true} Value={true} Label="Senha:" Placeholder="Insira uma senha..." />
          <TextButton
            Style={{ marginTop: 15 }}
            StyleText={{ textAlign: "center" }}
            Text1="Termos e Condições"
            Text2=" e "
            Text3="Política de Privacidade"
          >
            Ao se inscrever, você concordará com nossos e{" "}
          </TextButton>
        </C.Form>
        <C.Buttons>
          <ButtonGreen>Criar Conta</ButtonGreen>
        </C.Buttons>
        <TextButton Style={{ marginTop: 15, alignItems: "center" }} Text1="Entrar na minha conta">
          Já tem uma conta?{" "}
        </TextButton>
      </C.Center>
    </C.Container>
  );
}
