import { BackButton, BackIcon, Container, Logo } from './styles'
/*
  Criada uma tipagem para as imagens ".png";
  Em "@types" criado o arquivo de tipagem "png.d.ts";
*/
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  )
}
