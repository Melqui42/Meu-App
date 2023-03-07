import React from "react";

import Icon from "react-native-vector-icons/Feather";

import * as C from "./Style";

export default function InputType1(props) {
  const [state, setState] = React.useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(true);

  function Teste() {
    setState(!state);
    setIsSecureTextEntry(!isSecureTextEntry);
  }

  return (
    <C.InputContent style={props.Style}>
      <C.Label>{props.Label}</C.Label>
      <C.Input placeholder={props.Placeholder} secureTextEntry={props.SecureTextEntry ? isSecureTextEntry : false} />
      {props.Value ? (
        !state ? (
          <C.ButtonPasword onPress={Teste}>
            <Icon name="eye" size={25} />
          </C.ButtonPasword>
        ) : (
          <C.ButtonPasword onPress={Teste}>
            <Icon name="eye-off" size={25} />
          </C.ButtonPasword>
        )
      ) : (
        ""
      )}
    </C.InputContent>
  );
}
