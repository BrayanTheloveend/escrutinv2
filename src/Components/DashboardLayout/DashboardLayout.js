import React, { useEffect, useState } from 'react'
import { useColorMode, useColorModeValue } from '../ui/color-mode'
import { Avatar, Box, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Input, Text } from '@chakra-ui/react'
import { HiAnnotation, HiHome, HiOutlineHome, HiOutlineInbox, HiOutlineLogout, HiOutlineUserCircle, HiUserCircle } from 'react-icons/hi'
import NavItems from './NavItems'
import './dashboard.css'
import { LuBell, LuChevronLeft,  LuMoon, LuSearch, LuSun } from 'react-icons/lu'

const DashboardLayout = ({component, componentRightSide}) => {

    //VARIABLE--------------
    const cardColor = useColorModeValue('white', 'gray.900')
    const dashboardBg= useColorModeValue('#ffffffff', 'gray.950')
    const textGhost = useColorModeValue('gray.600', 'gray.500')
    const borderColor = useColorModeValue('gray.100', 'gray.700')
    const { colorMode, toggleColorMode } = useColorMode()
    const [isExpand, setIsExpand] = useState(false);

    //NAVITEMS-------------
    const navItems = [
        { label: 'Tableau de Bord', href: '/dashboard', icon:  <HiOutlineHome/>, iconSolid: <HiHome/> },
        { label: 'Manage', href: '/manage', icon: <HiOutlineInbox/>, iconSolid: <HiAnnotation/> },
      { label: 'Settings', href: '/UsersAdministration', icon: <HiOutlineUserCircle/>, iconSolid: <HiUserCircle/> },
    ]

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1024px)');
        const handleMediaChange = (e) => {
            if (e.matches) {
                setIsExpand(true);
                // Votre fonction
            } else {
                setIsExpand(false)
            }
        };
        mediaQuery.addEventListener('change', handleMediaChange);
        handleMediaChange(mediaQuery); // Appel initial
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);


    return (
        <Grid bg={dashboardBg} px={isExpand ?  4 : 'unset'} position={'relative'} w='100%'  gap={0}  gridTemplateColumns={{md: `${!isExpand ? '210px' :  '50px' }  1fr`, base: '1fr'}}>
            {/* Sidebars */}

            <GridItem px={!isExpand ? 3 : 'unset'} borderRight={!isExpand ? "1px solid" : "unset"} borderColor={borderColor} position={'sticky'} w={!isExpand ? '210px' :  '50px'} zIndex={isExpand ? 20 : 10} bgColor={dashboardBg}  left={!isExpand ? 0 :  2} h={'100vh'} top={0} justifyContent={'center'} display={{md: 'block', base: 'none'}}>
                {/* <Text textTransform={'uppercase'} ml={2} mb={4} fontSize={'xs'} fontWeight={600} fontFamily={'Onest'} color={textGhost}>
                    { !isExpand ? 'Navigation' : ' '}
                </Text> */}

                <HStack mt={6} position={'relative'} pb={6} pl={4} justify={'space-between'} w={'full'}>
                    { !isExpand && <Heading fontFamily={'Poppins'} fontSize={'2xl'} letterSpacing={-0.9}>
                        Chalenge
                    </Heading>}

                    
                </HStack>

                <Box mt={4}>
                    {navItems.map((elt, index)=>
                    <NavItems isExpand={isExpand} data={elt} key={index}/>
                    )}
                </Box>
                

                <Box py={4} w={'full'} borderTop={'1px solid'} borderColor={borderColor} position={'absolute'} bottom={10} >
                    <HStack>
                        <Icon boxSize={5} color={'red.500'}>
                            <HiOutlineLogout/>
                        </Icon>
                        <Text fontFamily={'Onest'} fontSize={'sm'} display={!isExpand ? 'block' : 'none'}>Deconnexion</Text>
                    </HStack>
                </Box>
                
            </GridItem>

            <GridItem w={'full'} h={'full'} position={'relative'}>
                <Flex bgColor={dashboardBg} zIndex={10} px={10} position={'fixed'} top={0} left={!isExpand ? '210px' :  '50px'} right={0} flex={1} borderBottom={'1px solid'} borderColor={borderColor} py={2} justify={'space-between'} align={'center'} animation={` fadeInDown 0.5s` }>

                    <IconButton bgColor={useColorModeValue('white', 'gray.800')} size={'sm'} position={'absolute'} style={{ zIndex: 10 }} left={ !isExpand ? -5 : 4} bottom={ !isExpand ? -5 : -4} onClick={()=>setIsExpand(!isExpand)} variant={"outline"} rounded={'full'}>
                        <Icon transform={`rotate(${!isExpand ? 0 : 180}deg)`} animation={'0.2s ease-in-out'} boxSize={4}>
                            <LuChevronLeft/>
                        </Icon>
                    </IconButton>

                    <HStack display={{md: 'flex', base: 'none'}} spacing={3} position={'relative'}>
                        <Input
                        visibility={!isExpand ? 'visible' : 'hidden'}
                        bgColor={ !isExpand ? '#efefef' : 'transparent'}
                        bg={cardColor}
                        minW={isExpand ? '40px' : '300px'}
                        fontFamily={'Onest'}
                        focusBorderColor={'blue.400'}
                        rounded={'0px'} 
                        type="text" 
                        placeholder="Rechercher ou saisir quelque chose..." 
                        />
                        <Icon boxSize={4} position='absolute' right={4} color={textGhost}>
                            <LuSearch/>
                        </Icon>
                    </HStack>

                    <HStack spacing={4} direction={'row'} justify={'space-between'} align={'center'}>
                        <IconButton onClick={toggleColorMode} variant={'ghost'} rounded={'full'}>
                            <Icon boxSize={4}>
                                {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
                            </Icon>
                        </IconButton>
                        <Icon boxSize={4}>
                            <LuBell/> 
                        </Icon>
                        <Avatar.Root size={'sm'}>
                            <Avatar.Image src="https://i.pravatar.cc/100"/>
                        </Avatar.Root>
                    </HStack>
                </Flex>

                <Grid gridTemplateColumns={'5fr 2fr'} w={'full'} h={'full'} maxW={'full'} maxH={'full'} position={'relative'}>

                    <GridItem bgColor={useColorModeValue('#ffffffff', 'gray.950')} pt={20} px={10} pb={10} maxW={'full'} maxH={'full'} overscrollY={'scroll'} animation={`${!isExpand ? 'fadeInLeft' : 'fadeInRight' } 0.8s` }>
                        <Box>
                            {component}
                        </Box>
                    </GridItem>

                    <GridItem borderLeft={'1px solid'} w={'1/4'} position={'fixed'} right={'0'} borderColor={borderColor} pt={20} px={2} pb={10} display={{'2xl': 'block', md: 'block', base: 'none'}} animation={`fadeInRight 0.5s` }>
                        <Box w={'full'} h={'83vh'} pb={20} position={'sticky'} top={20} px={4} overflowY={'scroll'}>
                            {componentRightSide}
                        </Box>
                    </GridItem>
                </Grid>

            </GridItem>
            

            
           
        </Grid>
    )
}

export default DashboardLayout
