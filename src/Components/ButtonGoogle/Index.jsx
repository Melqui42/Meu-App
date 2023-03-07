import { Text, Image } from "react-native";

import GoogleIcon from "../../Assets/GoogleIcon.png";

import * as C from "./Style";

export default function ButtonGoogle(props) {
  return (
    <C.ButtonGoogle>
      <Image source={GoogleIcon} style={{ width: 45, height: 45, marginRight: 10 }} />
      <Text>{props.children}</Text>
    </C.ButtonGoogle>
  );
}
