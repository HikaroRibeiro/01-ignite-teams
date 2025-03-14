import styled, { DefaultTheme } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.COLORS.GRAY_600};
  padding: 24px;
`
export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`
