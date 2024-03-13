'use client'
import { Box, Flex, Image, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import React from 'react';

function Topo() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            maxW={'1200px'}
            justifyContent={'space-between'}
            bg={'#DAA520'}
            marginRight={'auto'}
            marginLeft={'auto'}
        >
            <Flex
                marginLeft={'40px'}
                fontWeight={'500'}
            >
                <Image
                    src='assets/logo.png'
                    alt='logo'
                    width={70}
                    height={100}
                    mr={4}
                />
            </Flex>
            <Flex
                align={'center'}
                color={'#fff'}
            >
                <Flex
                    display={{ base: 'none', md: 'flex' }} // Mostrar o menu na versão desktop e ocultar na versão mobile
                >
                    <Link
                        as={NextLink}
                        href='/'
                        margin={'20px'}
                        fontWeight={'bold'}
                        _hover={{
                            transform: 'translateY(-3px)'
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        as={NextLink}
                        href='/sabores'
                        margin={'20px'}
                        fontWeight={'bold'}
                        _hover={{
                            transform: 'translateY(-3px)'
                        }}
                    >
                        Sabores
                    </Link>
                    <Link
                        as={NextLink}
                        href='/sobre'
                        margin={'20px'}
                        fontWeight={'bold'}
                        _hover={{
                            transform: 'translateY(-3px)'
                        }}
                    >
                        Sobre
                    </Link>
                </Flex>
                <IconButton
                    aria-label='Abrir menu'
                    icon={<HamburgerIcon />}
                    display={{ base: 'flex', md: 'none' }} // Mostrar o ícone do hamburguer na versão mobile e ocultar na versão desktop
                    onClick={onOpen}
                    variant='ghost'
        
                />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody
                        
                        >
                            <Flex flexDirection='column'>
                                <Link
                                    as={NextLink}
                                    href='/'
                                    margin={'20px'}
                                    fontWeight={'bold'}
                                    _hover={{
                                        transform: 'translateY(-3px)'
                                    }}
                                    onClick={onClose}
                                    
                                >
                                    Home
                                </Link>
                                <Link
                                    as={NextLink}
                                    href='/sabores'
                                    margin={'20px'}
                                    fontWeight={'bold'}
                                    _hover={{
                                        transform: 'translateY(-3px)'
                                    }}
                                    onClick={onClose}
                                    
                                >
                                    Sabores
                                </Link>
                                <Link
                                    as={NextLink}
                                    href='/sobre'
                                    margin={'20px'}
                                    fontWeight={'bold'}
                                    _hover={{
                                        transform: 'translateY(-3px)'
                                    }}
                                    onClick={onClose}
                                    
                                >
                                    Sobre
                                </Link>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Flex>
    );
}

export default Topo;
