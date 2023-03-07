import Style from "styled-components/native";

export const Button = Style.TouchableOpacity`
  width: 100%;
  height: 60px;
  display: flex;

  background: #12B586;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  elevation: 8;
  shadow-color: #12B586;
  shadow-opacity: 0.25;
  shadow-radius: 24px;
  shadow-offset: {
    width: 4px;
    height: 8px;
  }
`