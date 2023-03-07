import { Image } from "react-native";

import ImageSVG from "../../Assets/Fashionphotoshoot-amico.png";

import TextButton from "../../Components/TextButton/Index";
import ButtonGreen from "../../Components/ButtonGreen/Index";
import ButtonGoogle from "../../Components/ButtonGoogle/Index";

import * as C from "./Style";

export default function Home() {
  return (
    <C.Container>
      <C.Center>
        <Image source={ImageSVG} style={{ width: 315, height: 315 }} />
        <C.Content>
          <C.Top>
            <C.Title>Bem-Vindo ao Fashion</C.Title>
            <C.SubTitle>Compre roupas estilosas de diversos estilos.</C.SubTitle>
          </C.Top>
          <C.Buttons style={{ marginBottom: 20 }}>
            <ButtonGreen>Entrar</ButtonGreen>
            <ButtonGoogle>Continuar com Google</ButtonGoogle>
          </C.Buttons>
          <TextButton Style={{ alignItems: "center" }} Text1="Criar uma conta">
            Não tem uma conta?{" "}
          </TextButton>
        </C.Content>
      </C.Center>
    </C.Container>
  );
}
