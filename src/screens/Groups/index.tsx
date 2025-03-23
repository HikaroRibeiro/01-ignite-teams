// import * as S from './styles' Outra forma de importação dos componentes.
import { Header } from '@components/Header'
import { Container, Title } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Title>Groups</Title>
    </Container>
  )
}
