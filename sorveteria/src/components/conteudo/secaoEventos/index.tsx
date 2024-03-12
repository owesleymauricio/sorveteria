import {
    Box,
    Image,
    Container,
    Heading,
    SimpleGrid
} from '@chakra-ui/react';
import React from 'react'

function SecaoEventos() {
    return (
        <>
          <SimpleGrid
        columns={{ base: 1, sm: 2 }}
        maxW={'1200px'}

        width={{ base: '100%', sm: '100%', }}
      >

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
             NOSSOS EVENTOS
          </Heading>
          <Heading
            size={'sm'}
          >
            Delicias com sorvete!
          </Heading>
          <Container>
          Mais do que uma sorveteria, uma extensão da sua casa!
                        Estamos aqui prontinhos para te atender e oferecer os melhores
                        eventos com os melhores sorvete da sua vida! Venha nos conhecer
                        e passar um tempo aqui com a gente.
          </Container>
        </Box>

        <Box>
          <Image
           src='assets/eventos-image.jpg'

          />
        </Box>
       

      </SimpleGrid>
          
        </>
    )
}

export default SecaoEventos;