import { Text } from "react-native";

import * as C from "./Style";

export default function TextButton(props) {
  return (
    <C.TextButton style={props.Style}>
      <Text style={props.StyleText}>
        {props.children}
        <Text style={{ textDecorationLine: "underline", color: "#12B586" }}>{props.Text1}</Text>
        {props.Text2}
        <Text style={{ textDecorationLine: "underline", color: "#12B586" }}>{props.Text3}</Text>
      </Text>
    </C.TextButton>
  );
}
