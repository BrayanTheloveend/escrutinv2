import { Box, Heading,  Icon, IconButton,  Span,  } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Components/Navbar'
import { useColorMode, useColorModeValue } from '../../Components/ui/color-mode'
import {  LuMoon,  LuSun } from 'react-icons/lu'

import Landing from './Components/Landing'

const ModelOne = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const cardColor = useColorModeValue('white', 'gray.900')
  const dashboardBg= useColorModeValue('#ffffffff', 'gray.950')
  const textGhost = useColorModeValue('gray.600', 'gray.500')
  

  return (
    <Box position={'relative'} w={'full'} h={'100vh'}>

      {/* Navbar */}
      <Box pos={'fixed'} zIndex={1000} top={0}>
        <Navbar/>
      </Box>

      {/* Landing Page */}
      <Box mt={10} boxShadow={'sm'} h={'100vh'} p={4} pt={8} bgColor={cardColor} roundedBottom={40}>
        <Landing/>
      </Box>

      {/* Concours infos */}

      <Heading textAlign={'center'} my={{md: 14, '2xl': 24}} fontSize={{md: '4xl', '2xl': '5xl'}} fontFamily={"Onest"}>
        Le point de <Span color={'blue.500'}>départ</Span>
      </Heading>

      



     






        

      <IconButton position={'fixed'} bottom={4} right={4} shadow={'lg'} zIndex={1000} onClick={toggleColorMode} variant={'solid'} rounded={'full'}>
        <Icon boxSize={4}>
            {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
        </Icon>
      </IconButton>
    </Box>
  )
}

export default ModelOne
