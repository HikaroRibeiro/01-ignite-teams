import { Container, Icon, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

/* 
    Importo as propriedades do "TouchableOpacity" e incremento mais uma propriedade ao componente "title: string". 
    Essas tipagens devem ser repassadas para o componente TouchableOpacity "...rest".
    
*/
type Props = TouchableOpacityProps & {
  title: string
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
