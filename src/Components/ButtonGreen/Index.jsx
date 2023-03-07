import { Text } from "react-native";

import * as C from "./Style";

export default function ButtonGreen(props) {
  return (
    <C.Button style={props.Style}>
      <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>{props.children}</Text>
    </C.Button>
  );
}
