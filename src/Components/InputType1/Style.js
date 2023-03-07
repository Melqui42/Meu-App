import Style from "styled-components/native";

export const InputContent = Style.View`
`

export const Label = Style.Text`
  font-size: 20px
  margin-bottom: 10px;
`

export const Input = Style.TextInput`
  height: 65px
  padding: 20px;
  background: #FFFFFF
  border-radius: 10px;
  elevation: 8;
  shadow-color: #3A3A3A;
  shadow-opacity: 0.25;
  shadow-radius: 24px;
  shadow-offset: {
    width: 4px;
    height: 8px;
  }

`

export const ButtonPasword = Style.TouchableOpacity`
  position: absolute;
  top: 58px;
  left: 85%
`