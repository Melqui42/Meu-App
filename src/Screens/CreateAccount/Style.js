import Style from "styled-components/native";

export const Container = Style.View`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F2F2F2
`

export const Center = Style.View`
  width: 85%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Top = Style.View`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`

export const Title = Style.Text`
  width: 100%;
  font-size: 50px
  font-weight: 500;
`

export const SubTitle = Style.Text`
  margin-top: 5px;
  font-size: 18px
`

export const Form = Style.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Buttons = Style.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10;
  margin-bottom: 10;
`