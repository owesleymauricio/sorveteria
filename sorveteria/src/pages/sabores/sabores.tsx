import Rodape from '@/components/rodape';
import { Box, Container, Grid, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

function SaboresPage() {
    return (

        <>


            <Box
                backgroundImage='assets/banner-sabores.jpg'
                backgroundSize="cover"
                backgroundPosition="center"
                width="100%"
                height="400px"
                position="relative"
                zIndex={1}
                maxW={'1200px'}
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
                        size={{ base: '2xl', md: '4xl' }}
                        whiteSpace={{ base: 'unset', md: 'nowrap' }} // Alterando a propriedade white-space para 'unset' em telas menores

                    >
                        Nossos Sabores
                    </Heading>
                </Box>

            </Box>
            {/* final baner sabores */}

            <Heading
                bg={'#fff'}
                color={'#000'}
                size={'xl'}
                textAlign={'center'}
                maxW={'1200px'}
                marginRight={'auto'}
                marginLeft={'auto'}
            >
                SABORES DE SORVETE
            </Heading>
            {/*inicio sabores */}
            <SimpleGrid
                bg={'#fff'}
                columns={{ base: 1, sm: 2 }}
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
                        src='assets/sabor-oreo.png'
                        width={'100px'}
                        height={'100px'}
                        marginRight={'auto'}
                        marginLeft={'auto'}

                    />

                    <Heading
                        size={'lg'}
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Sorvete de Oreo
                    </Heading>
                    <Text
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                    </Text>

                </Box>

                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        src='assets/sabor-pistache.png'
                        width={'100px'}
                        height={'100px'}
                        marginRight={'auto'}
                        marginLeft={'auto'}
                    />

                    <Heading
                        size={'lg'}
                        color={'#000'}
                        textAlign={'center'}
                    >

                        Sorvete Pistache
                    </Heading>
                    <Text
                        textAlign={'center'}
                        color={'#000'}
                    >
                        Cremoso sorvete sabor pistache com pedacinhos de semente.
                    </Text>

                </Box>

                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        src='assets/sabor-cookies-avela.png'
                        width={'100px'}
                        height={'100px'}
                        marginRight={'auto'}
                        marginLeft={'auto'}
                    />

                    <Heading
                        size={'lg'}
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Sorvete Cookies & Avelã
                    </Heading>
                    <Text
                        color={'#000'}
                        textAlign={'center'}
                    >

                        O nosso melhor sorvete. Você vai adorar o sabor.
                    </Text>

                </Box>

                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        src='assets/sorbet-kiwi.png'
                        width={'100px'}
                        height={'100px'}
                        marginRight={'auto'}
                        marginLeft={'auto'}
                    />

                    <Heading
                        size={'lg'}
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Sorvete de Kiwi
                    </Heading>
                    <Text
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                    </Text>

                </Box>

                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        src='assets/sorbet-morango.png'
                        width={'100px'}
                        height={'100px'}
                        marginRight={'auto'}
                        marginLeft={'auto'}
                    />

                    <Heading
                        size={'lg'}
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Sorvete de Morango
                    </Heading>
                    <Text
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Sorvete de morango gourmet. Tradicional e saboroso.
                    </Text>

                </Box>

                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Image
                        src='assets/sorbet-limao.png'
                        width={'100px'}
                        height={'100px'}
                        marginRight={'auto'}
                        marginLeft={'auto'}
                    />

                    <Heading
                        size={'lg'}
                        color={'#000'}
                        textAlign={'center'}
                    >
                        Sorvete de Limão Siciliano
                    </Heading>
                    <Text
                        color={'#000'}
                        textAlign={'center'}
                    >
                        O incrivel sorvete gourmet de limão siciliano vai te encantar.

                    </Text>

                </Box>

            </SimpleGrid>
            {/*fim dos sabores */}

            <Rodape />
        </>
    )
}

export default SaboresPage;