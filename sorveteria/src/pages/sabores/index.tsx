import Topo from '@/components/topo';
import React from 'react'
import SaboresPage from './sabores';
import { ChakraProvider } from '@chakra-ui/react';

function Sabores() {
  return (
    <ChakraProvider>
    <Topo/>
    <SaboresPage/>
    </ChakraProvider>
  )
}

export default Sabores;