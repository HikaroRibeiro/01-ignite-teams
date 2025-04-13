// import * as S from './styles' Outra forma de importação dos componentes.
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container, Title } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Title>Groups</Title>
      <Highlight title="Turma 1" subtitle="Jogue com sua turma"></Highlight>
    </Container>
  )
}
