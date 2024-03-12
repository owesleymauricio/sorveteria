import {
    Box,
    Image,
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react';
import React from 'react'

function SecaoSobre() {
    return (
        <>
        <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        maxW={'1200px'}

        width={{ base: '100%', sm: '100%', }}
      >

        <Box>
          <Image
             src='assets/sobre-image.jpg'

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
            SOBRE NÓS
          </Heading>
          <Heading
            size={'sm'}
          >
             Alegria em cada casquinha!
          </Heading>
          <Container>
          Venha tomar o melhor sorvete da região
                        aqui com a gente! Nós estamos há anos no
                        mercado produzindo o que tem de melhor para o
                        nosso cliente e você não pode ficar fora dessa.
                        Venha nos fazer uma visita e aproveite o melhor
                        atendimento e o melhor sorvete da cidade.
          </Container>
        </Box>

    </SimpleGrid>
        </>
    )
}

export default SecaoSobre;