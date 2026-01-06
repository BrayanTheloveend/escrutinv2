import React, { useEffect, useState } from 'react'
import { useColorMode, useColorModeValue } from '../ui/color-mode'
import { Avatar, Box, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Input, Text } from '@chakra-ui/react'
import { HiAnnotation, HiHome, HiOutlineBell, HiOutlineHome, HiOutlineInbox, HiOutlineLogout, HiOutlineUserCircle, HiSearch, HiUserCircle } from 'react-icons/hi'
import NavItems from './NavItems'
import './dashboard.css'
import { LuBell, LuChevronLeft,  LuMoon, LuSun } from 'react-icons/lu'

const DashboardLayout = ({component}) => {

    //VARIABLE--------------
    const cardColor = useColorModeValue('white', 'gray.900')
    const dashboardBg= useColorModeValue('#ffffffff', 'blackAplha')
    const textGhost = useColorModeValue('gray.600', 'gray.500')
    const { colorMode, toggleColorMode } = useColorMode()
    const [isExpand, setIsExpand] = useState(false);
    const borderColor = useColorModeValue('gray.100', 'gray.700')

    //NAVITEMS-------------
    const navItems = [
        { label: 'Tableau de Bord', href: '/dashboard', icon:  <HiOutlineHome/>, iconSolid: <HiHome/> },
        { label: 'Concours', href: '/notificationsRequest', icon: <HiOutlineInbox/>, iconSolid: <HiAnnotation/> },
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

             <GridItem px={!isExpand ? 3 : 'unset'} borderRight={!isExpand ? "1px solid" : "unset"} borderColor={borderColor} position={'sticky'} w={'full'} h={'100vh'} justifyContent={'center'} display={{md: 'block', base: 'none'}}>
                {/* <Text textTransform={'uppercase'} ml={2} mb={4} fontSize={'xs'} fontWeight={600} fontFamily={'Onest'} color={textGhost}>
                    { !isExpand ? 'Navigation' : ' '}
                </Text> */}

                <HStack mt={6} pb={6} pl={4} justify={'space-between'} w={'full'}>
                    <Heading fontFamily={'Poppins'} fontSize={'2xl'} letterSpacing={-0.9}>
                        Chalenge
                    </Heading>

                    <IconButton bgColor={useColorModeValue('white', 'gray.800')} size={'sm'} position={'absolute'} right={-5} top={9} onClick={()=>setIsExpand(!isExpand)} variant={"outline"} rounded={'full'}>
                        <Icon transform={`rotate(${isExpand ? 0 : 180}deg)`} animation={'0.2s ease-in-out'} boxSize={4}>
                            <LuChevronLeft/>
                        </Icon>
                    </IconButton>
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

            <GridItem w={'full'} h={'full'}>
                <Flex px={10}  borderBottom={'1px solid'} borderColor={borderColor} py={2} justify={'space-between'} align={'center'}>
                    <HStack  spacing={3} position={'relative'}>
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
                            <HiSearch/>
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
                {component}
            </GridItem>

            
           
        </Grid>
    )
}

export default DashboardLayout
