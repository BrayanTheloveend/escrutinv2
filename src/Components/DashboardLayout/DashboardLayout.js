import React, { useEffect, useState } from 'react'
import { useColorMode, useColorModeValue } from '../ui/color-mode'
import { Avatar, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Input, Text } from '@chakra-ui/react'
import { HiAnnotation, HiHome, HiOutlineAdjustments, HiOutlineAnnotation, HiOutlineArchive, HiOutlineHome, HiOutlineInbox, HiOutlineUserCircle, HiSearch, HiUserCircle } from 'react-icons/hi'
import NavItems from './NavItems'
import './dashboard.css'
import { LuExpand, LuMoon, LuSun } from 'react-icons/lu'

const DashboardLayout = ({component}) => {

    //VARIABLE--------------
    const cardColor = useColorModeValue('white', 'gray.900')
    const dashboardBg= useColorModeValue('#ffffffff', 'blackAplha')
    const textGhost = useColorModeValue('gray.600', 'gray.500')
    const { colorMode, toggleColorMode } = useColorMode()
    const [isExpand, setIsExpand] = useState(false);

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

             <GridItem px={!isExpand ? 3 : 'unset'} borderRight={"1px solid"} borderRightColor={'gray.200'} position={'sticky'} w={'full'} h={'100vh'} display={{md: 'block', base: 'none'}}>
                {/* <Text textTransform={'uppercase'} ml={2} mb={4} fontSize={'xs'} fontWeight={600} fontFamily={'Onest'} color={textGhost}>
                    { !isExpand ? 'Navigation' : ' '}
                </Text> */}

                <HStack py={3} pb={6} pl={4} justify={'space-between'} w={'full'}>
                    <Heading fontFamily={'Poppins'} letterSpacing={-0.9}>
                        Chalenge
                    </Heading>

                    <IconButton onClick={()=>setIsExpand(!isExpand)} variant={"outline"} size={'sm'} rounded={'full'}>
                        <Icon boxSize={4}>
                            <LuExpand/>
                        </Icon>
                    </IconButton>
                </HStack>

                {navItems.map((elt, index)=>
                    <NavItems isExpand={isExpand} data={elt} key={index}/>
                )}
                
            </GridItem>

            <GridItem w={'full'} h={'full'}>
                <Flex bgColor={'#efefef'} py={2} px={4} justify={'space-between'} align={'center'}>
                    <HStack spacing={3} position={'relative'}>
                        <Input
                        bg={cardColor}
                            focusBorderColor={'blue.400'}
                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                            rounded={'full'} 
                            type="text" 
                            placeholder="Rechercher..." 
                        />
                        <Icon boxSize={4} position='absolute' right={4} color={textGhost}>
                            <HiSearch/>
                        </Icon>
                    </HStack>

                    <HStack spacing={4} direction={'row'} align={'center'}>
                        <IconButton onClick={toggleColorMode} variant={'ghost'} rounded={'full'}>
                            <Icon boxSize={4}>
                                {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
                            </Icon>
                        </IconButton>
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
