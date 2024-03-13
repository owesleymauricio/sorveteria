import Rodape from '@/components/rodape';
import Topo from '@/components/topo';
import { Box, Image, ChakraProvider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

function Sobre() {
  return (
    <ChakraProvider>
      <Topo />

      <Box
        backgroundImage='assets/banner-sobre.png'
        backgroundSize="cover"
        backgroundPosition="center"
        width="100%"
        height="400px"
        position="relative"
        zIndex={1}
        marginLeft={'auto'}
        marginRight={'auto'}
        maxW={'1200px'}
      >

        <Box
          position="absolute"
          top="30%"
          width="100%" textAlign="center"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}

        >
          <Heading
            fontWeight={'bold'}
            as="h1"
            size={{ base: '2xl', md: '4xl' }}
            whiteSpace={{ base: 'unset', md: 'nowrap' }} // Alterando a propriedade white-space para 'unset' em telas menores
            color={'white'}
            textShadow={'1px 2px 1px #000'}
          >
            A Gelateria
          </Heading>
        </Box>

      </Box>
      {/*fim banner capa */}

      <Flex
        bg={'#fff'}
        flexDirection={'column'}
        align={'center'}
        justifyContent={'center'}
        color={'#000'}
        maxW={'1200px'}
        marginRight={'auto'}
        marginLeft={'auto'}
        paddingBottom={'30px'}
      >
        <Heading
          size={'xl'}
          mt={'20px'}
        >
          Sobre Nós
        </Heading>
        <Heading
          mt={'20px'}
          size={'sm'}
        >
          Nós simplesmente amamos sorvete!
        </Heading>
        <Text
          mt={'20px'}
          paddingLeft={{ base: '20px', md: '90px' }}
          paddingRight={{ base: '20px', md: '90px' }}
        >
          Somos uma empresa apaixonada pelo que faz.
          Colocamos amor em cada sorvete produzido.
          Fazemos o melhor sorvete para os nossos clientes e
          gostamos de receber elogios. Estamos operando desde 2009
          com as melhores matérias-primas para a produção final do sorvete.
          Vendemos tanto para varejo como para atacado.
        </Text>
        <Text
          mt={'10px'}
          paddingLeft={{ base: '20px', md: '90px' }}
          paddingRight={{ base: '20px', md: '90px' }}
        >
          Nossos clientes podem comprar os nossos sorvetes
          e degustar na nossa loja ou levar para sua
          residência e aproveitar junto com a família.
          Também vendemos para estabelecimentos e criamos eventos
          como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.

        </Text>
      </Flex>


      <SimpleGrid
      
        bg={'#fff'}
        spacing={2}
        columns={{ base: 1, md: 2 }}
        maxW={'1200px'}
        alignItems={'center'}
        justifyContent={'center'}
        width={{ base: '100%', sm: '100%', }}
        maxWidth={'1200px'}
        marginRight={'auto'}
        marginLeft={'auto'}
      >

        <Box
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src='assets/sobre-image.jpg'
            width={'100%'}
            height={'400px'}
            marginRight={'auto'}
            marginLeft={'auto'}

          />

        </Box>

        <Box
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src='assets/sorveteria.jpg'
            width={'100%'}
            height={'400px'}
            marginRight={'auto'}
            marginLeft={'auto'}

          />

        </Box>
      </SimpleGrid>

      {/*fim do sobre */}

      <Rodape/>

    </ChakraProvider>
  )
}

export default Sobre;