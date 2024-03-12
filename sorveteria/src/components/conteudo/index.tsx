import React from 'react'
import Capa from './capa';
import SecaoSabores from './secaoSabores';
import SecaoEventos from './secaoEventos';
import SecaoSobre from './secaoSobre';
import { Flex } from '@chakra-ui/react';

function Conteudo() {
  return (
    <Flex
    flexDirection={'column'}
    maxW={'1200px'}
    marginLeft={'auto'}
    marginRight={'auto'}
    >
    <Capa/>
    <SecaoSabores/>
    <SecaoEventos/>
    <SecaoSobre/>
    </Flex>
  )
}

export default Conteudo;