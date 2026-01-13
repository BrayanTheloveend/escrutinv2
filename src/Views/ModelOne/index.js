import { Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Image, Link, Span, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Components/Navbar'
import { useColorMode, useColorModeValue } from '../../Components/ui/color-mode'
import { LuArrowUpRight, LuCheck, LuFingerprint, LuGift, LuMoon, LuMousePointer2, LuPlay, LuSun } from 'react-icons/lu'
import { HiCalendar } from 'react-icons/hi'
import Partners from './Components/Partners'
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

      <Container centerContent mt={14} px={12}>
        <Heading pb={14} fontSize={'4xl'} fontFamily={"Poppins"}>
          Le point de <Span color={'blue.500'}>départ</Span>
        </Heading>

        <Flex gap={8}>

          <Box rounded={20}>

          </Box>
        </Flex>
      </Container>






        

      <IconButton position={'fixed'} bottom={4} right={4} shadow={'lg'} zIndex={1000} onClick={toggleColorMode} variant={'solid'} rounded={'full'}>
        <Icon boxSize={4}>
            {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
        </Icon>
      </IconButton>
    </Box>
  )
}

export default ModelOne
