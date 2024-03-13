import {
    Box,
    Heading,
    Image,
    Grid,
    Text,
    Flex
} from '@chakra-ui/react';
import React from 'react'

function Rodape() {
    return (
        <>
            <Grid
                bg={'#000'}
                templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr']}
                gap={4}
                alignItems={'center'}
                justifyContent={'center'}
                p={'20px'}
                maxW={'1200px'}
                marginRight={'auto'}
                marginLeft={'auto'}
            >
                <Box
                    height='120px'
                    display={'flex'}
                    alignSelf={'center'}
                    justifyContent={'center'}
                   
                >
                    <Image
                        src='assets/logo.png'
                        alt='logo'
                        height={'100px'}
                        width={'100px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        textAlign={'center'}
                    />
                </Box>

                <Box
                    height='120px'
                    textAlign={'center'}
                    justifyContent={'center'}
                    color={'#fff'}
                >
                    <Heading
                        fontWeight={'bold'}
                        size={'lg'}
                    >
                        ENDEREÇO
                    </Heading>
                    <Text>
                        Av. Bernardino de Campos, 98
                    </Text>
                    <Text>
                        São Paulo, SP 12345-678
                    </Text>
                </Box>
                <Box height='120px'>
                    <Box
                        height='120px'
                        textAlign={'center'}
                        justifyContent={'center'}
                        color={'#fff'}
                    >
                        <Heading
                            fontWeight={'bold'}
                            size={'lg'}
                        >
                            CONTATO
                        </Heading>
                        <Text>

                            info@meusite.com
                        </Text>
                        <Text>

                            Tel: (11) 3456-7890
                        </Text>
                    </Box>
                </Box>

                <Box height='120px'>
                    <Box
                        height='120px'
                        textAlign={'center'}
                        justifyContent={'center'}
                        color={'#fff'}
                    >
                        <Heading
                            fontWeight={'bold'}
                            size={'lg'}
                        >
                            HORÁRIOS
                        </Heading>
                        <Text>
                            ABERTO TODOS OS DIAS
                        </Text>
                        <Text>
                            10:00 - 22:00
                        </Text>
                    </Box>
                </Box>
            </Grid>
            <Flex
                bg={'#000'}
                height={'50px'}
                align={'center'}
                justify={'center'}
                
            >
                <Text
                color={'#fff'}
                textAlign={'center'}
                >
                    Gelateria. Orgulhosamente desenvolvido por "Wesley mauricio"
                </Text>
            </Flex>

        </>
    )
}

export default Rodape;
