import { Box, Button, Flex, Heading, HStack, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavItems from './NavItems'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { LuMenu } from 'react-icons/lu'

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
    let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13


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
    <Box px={{md: 10, base: 1}} borderBottom={showNavbarBorder && "1px solid"} borderColor={useColorModeValue('gray.100', 'gray.800')} w={'100vw'} bgColor={cardColor}>
        {/* desktop */}

        <Flex justify={{md: 'inherit', base: 'space-between'}} minH={{md: '70px', base: isIOSDevice ? '70px' : '60px'}} align={'center'}>

            {/* logo */}
            <HStack gap={1}>
                <IconButton display={{md: 'none', base: 'inline-flex'}} variant={'ghost'}>
                    <LuMenu/>
                </IconButton>
                <Heading fontFamily={'Poppins'} fontSize={{md: '2xl', base: "lg"}} letterSpacing={-0.9}>
                    Chalenge
                </Heading>
            </HStack>

            {/* navItems */}
            <Flex display={{md: 'flex', base: 'none'}} gap={7} flex={1} justify={'center'}>
                {navItems.map((elt, index)=>{
                    return <NavItems key={index} data={elt} />
                })}

            </Flex>

            {/* Call to Action */}
            <HStack position={'relative'} _before={{
                content: "''",
                h: {md: '28px', base: '18px'},
                w: '1px',
                position: 'absolute',
                zIndex: 4,
                left: -2,
                bgColor: 'gray.500'
            }}>
                <Button display={{md: 'inline-flex', base: 'none'}} fontWeight={'medium'} variant={'ghost'} rounded={'full'}>
                    get In Touch
                </Button>
                <Button fontWeight={'medium'} size={{md: 'md', base: 'sm'}} variant={'outline'} rounded={'full'}>
                    Log in
                </Button>

            </HStack>

        </Flex>
    </Box>
  )
}

export default Navbar
