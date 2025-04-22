/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as S from './styles' Outra forma de importação dos componentes.
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Container, Title } from './styles'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Rocketseat', 'Galera Dev'])

  return (
    <Container>
      <Header />
      <Title>Groups</Title>
      <Highlight title="Turma 1" subtitle="Jogue com sua turma"></Highlight>

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  )
}
