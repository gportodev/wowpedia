import styled from 'styled-components/native'

export const Background = styled.ImageBackground`
  flex: 1;
`

export const Header = styled.View`
  flex-grow: 0.3;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.Image`
  width: 67px;
  height: 68px;
`

export const Categories = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
`

export const Item = styled.View`
  background: #403f3f3f;
  width: 337px;
  margin: 10px;
  border-radius: 15px;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: 36px;
  color: #FFE42C;
  margin: 40px 15px;
  text-shadow-color: #3a3d3a;
  text-shadow-radius: 10;
`

export const Img = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 100px;
`
