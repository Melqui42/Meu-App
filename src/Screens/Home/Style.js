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

export const Content = Style.View`
  height: 45%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Top = Style.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20
`

export const Title = Style.Text`
  width: 100%;
  font-size: 30px
  font-weight: 500;
  text-align: center;
`

export const SubTitle = Style.Text`
  margin-top: 5px;
  font-size: 15px
  text-align: center;
`

export const Buttons = Style.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`
