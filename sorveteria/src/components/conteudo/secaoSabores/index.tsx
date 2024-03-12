import { Box, SimpleGrid, Image, Container, Heading } from '@chakra-ui/react';
import React from 'react'

function SecaoSabores() {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        maxW={'1200px'}

        width={{ base: '100%', sm: '100%', }}
      >

        <Box>
          <Image
            src='assets/banner-sabores.jpg'

          />
        </Box>
        <Box
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={{ base: '0px', md: '10px' }}
          mt={{ base: '10px', md: '0px' }}
          textAlign={'center'}
          borderRadius={'5px'}
          border={{ base: '1px solid gray', sm: 'none' }}
        >
          <Heading
            size={'lg'}
          >
            Nossos produtos
          </Heading>
          <Heading
            size={'sm'}
          >
            Novos e deliciosos!
          </Heading>
          <Container>
            Sorvete bom é aquele feito com os melhores ingredientes!
            Aqui na gelateria todos os nossos produtos são naturais,
            à base de frutas e sem <strong>nenhum conservante</strong>! Também temos
            opções sem lactose e sem açúcar. Venha conhecer e
            perceber que tem como o sorvete ser delicioso e
            saudável ao mesmo tempo!
          </Container>
        </Box>

      </SimpleGrid>
    </>
  )
}

export default SecaoSabores;