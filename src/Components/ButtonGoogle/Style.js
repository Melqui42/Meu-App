import Style from "styled-components/native";

export const ButtonGoogle = Style.TouchableOpacity`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  justify-content: center;
  background: #FFFFFF
  elevation: 8;
  shadow-color: #3A3A3A;
  shadow-opacity: 0.25;
  shadow-radius: 24px;
  shadow-offset: {
    width: 4px;
    height: 8px;
  }
  margin-top: 15px
`