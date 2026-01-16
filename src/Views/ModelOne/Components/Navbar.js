import { Box, Button, Flex, Heading, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavItems from './NavItems'
import { useColorModeValue } from '../../../Components/ui/color-mode'

const Navbar = () => {

    const navItems = [
        {
            label : 'Home',
            href: '/'
        },
        {
            label : 'Solutions',
            href: '/'
        },
        {
            label : 'Pricings',
            href: '/'
        },
        {
            label : 'Contact Us',
            href: '/'
        },
    ]
    const cardColor = useColorModeValue('white', 'gray.900')
    const [showNavbarBorder, setShowNavbarBorder] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowNavbarBorder(true);
            } else {
                setShowNavbarBorder(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <Box px={{md: 10, base: 4}} border={showNavbarBorder && "1px solid"} borderColor={useColorModeValue('gray.100', 'gray.800')} w={'100vw'} bgColor={cardColor}>
        {/* desktop */}

        <Flex minH={'70px'} align={'center'}>

            {/* logo */}
            <Box>
                <Heading fontFamily={'Poppins'} fontSize={'2xl'} letterSpacing={-0.9}>
                    Chalenge
                </Heading>
            </Box>

            {/* navItems */}
            <Flex display={{md: 'flex', base: 'none'}} gap={7} flex={1} justify={'center'}>
                {navItems.map((elt, index)=>{
                    return <NavItems key={index} data={elt} />
                })}

            </Flex>

            {/* Call to Action */}
            <HStack position={'relative'} _before={{
                content: "''",
                h: '28px',
                w: '1px',
                position: 'absolute',
                zIndex: 4,
                left: -2,
                bgColor: 'gray.500'
            }}>
                <Button fontWeight={'medium'} variant={'ghost'} rounded={'full'}>
                    get In Touch
                </Button>
                <Button fontWeight={'medium'} variant={'outline'} rounded={'full'}>
                    Log in
                </Button>

            </HStack>

        </Flex>
    </Box>
  )
}

export default Navbar
