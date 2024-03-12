import { Box, Heading } from '@chakra-ui/react';
import React from 'react'

function Capa() {
    return (
        <Box as='section'
        bg={'#DAA520'}
        w={'100%'}
        position="relative"
        maxWidth={'1200px'} 
        margin={'auto'} // Para centralizar a caixa pai horizontalmente
        >
            <Box
                backgroundImage='assets/banner-home.png'
                backgroundSize="cover"
                backgroundPosition="center"
                width="200px"
                height="500px"
                position="relative"
                zIndex={1}
                marginLeft={'auto'}
                marginRight={'auto'}
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
                     size={{base: '2xl', md: '4xl'}}
                    whiteSpace={{ base: 'unset', md: 'nowrap' }} // Alterando a propriedade white-space para 'unset' em telas menores
              
                    >
                    SORVETE ARTESANAL
                    </Heading>
                </Box>
            
            </Box>
           

        </Box>
    )
}

export default Capa;