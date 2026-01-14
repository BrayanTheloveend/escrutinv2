import { Box, Container, Flex, Heading,  HStack,  Icon, IconButton,  Span, Text, VStack,  } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Components/Navbar'
import { useColorMode, useColorModeValue } from '../../Components/ui/color-mode'
import {  LuAward, LuCalendar, LuCrown, LuMoon,  LuRibbon,  LuSun } from 'react-icons/lu'

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

      {/* <Heading  textAlign={'center'}  fontSize={{md: '2xl', '2xl': '4xl'}} fontFamily={"Poppins"} letterSpacing={-0.5}>
        Le point de départ
      </Heading> */}
    

      <Flex w={'full'} py={{md: 20, '2xl': 24}} justify={'center'} align={'center'} gap={8} position={'relative'} overflow={'hidden'}>


        {/* floating bubbles */}
        <Box position="absolute" top={0} left={0} right={0} bottom={0} pointerEvents="none">
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width="4px"
            height="4px"
            bg={i%2 === 0 ? 'orange.400' : 'blue.400'}
            borderRadius="full"
            opacity={0.3}
            zIndex={-1}
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
            animation={`floatParticle ${5 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`}
          />
        ))}
      </Box>

        <Box 
          maxW={{md: '260px', '2xl': '310px'}} 
          boxShadow={'sm'} 
          bgColor={cardColor} 
          border={'2px solid'} 
          borderColor={useColorModeValue('blue.200', 'blue.800')} 
          p={6} 
          rounded={24} 
          roundedTopLeft={10}
          backdropFilter={'blur(10px)'}
          >
          <Box float={'right'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={12} h={12} rounded={'full'} bgColor={'blue.500'} color={'white'}>
            <Icon boxSize={{md: 4, '2xl': 5}}>
              <LuCalendar/>
            </Icon>
          </Box>
          <Box mt={2}>
            <Text color={textGhost} letterSpacing={-0.5} fontWeight={'medium'} fontSize={{md: 'sm', '2xl': 'md'}}>
              Fin du concours
            </Text>
            <Heading fontFamily={'Onest'} fontSize={{md: 'xl', '2xl': '2xl'}} letterSpacing={-0.5}>
              20 Janvier 2026
            </Heading>
            <Text mt={{md: 2, '2xl': 4}} fontSize={{md: 'sm', '2xl': 'md'}} lineClamp={4}>
              Nous vous encourageons à consulter notre site web pour des détails supplémentaires.
            </Text>
          </Box>
        </Box>


        <Box>
          <VStack spacing={4} gap={4}>
            <Text fontFamily={'Lobster Two'} fontSize={{md: '2xl', '2xl': '3xl'}}>Temps restant</Text>
            <HStack gap={3}  justify="center" w="full" zIndex={20} position={'relative'}>
              <VStack bgColor={cardColor} boxShadow={'sm'} gap={{md: 'inherit', '2xl':  0}} border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.600')} p={4} px={6} spacing={1} rounded={12}>
                <Text fontFamily={'Outfit'} fontSize={{md: "3xl", '2xl': '5xl'}} fontWeight="extrabold">
                  {String(25).padStart(2, '0')}
                </Text>
                <Text fontSize={{md: "xs", '2xl': 'sm'}} opacity={0.9}>Jours</Text>
              </VStack>
              <Text fontSize="2xl" opacity={0.7}>:</Text>
              <VStack bgColor={cardColor} boxShadow={'sm'} gap={{md: 'inherit', '2xl':  0}} border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.600')} p={4} px={6} spacing={1} rounded={12}>
                <Text fontFamily={'Outfit'} fontSize={{md: "3xl", '2xl': '5xl'}} fontWeight="bold">
                  {String(15).padStart(2, '0')}
                </Text>
                <Text fontSize={{md: "xs", '2xl': 'sm'}} opacity={0.9}>Heures</Text>
              </VStack>
              <Text fontSize="2xl" opacity={0.7}>:</Text>
              <VStack bgColor={cardColor} boxShadow={'sm'} gap={{md: 'inherit', '2xl':  0}} border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.600')} p={4} px={5} spacing={1} rounded={12}>
                <Text fontFamily={'Outfit'} fontSize={{md: "3xl", '2xl': '5xl'}} fontWeight="bold">
                  {String('08').padStart(2, '0')}
                </Text>
                <Text fontSize={{md: "xs", '2xl': 'sm'}} opacity={0.9}>Minutes</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        <Box maxW={{md: '260px', '2xl': '310px'}} boxShadow={'sm'} bgColor={cardColor} border={'2px solid'} borderColor={useColorModeValue('orange.200', 'orange.800')} p={6} rounded={24} roundedTopRight={10}>
          <Box float={'right'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={{md: 10, '2xl': 12}} h={{md: 10, '2xl': 12}} rounded={'full'} bgColor={'orange.500'} color={'white'}>
            <Icon boxSize={{md: 4, '2xl' :5}}>
              <LuCrown/>
            </Icon>
          </Box>
          <Box mt={2}>
            <Text color={textGhost} letterSpacing={-0.5} fontWeight={'medium'} fontSize={{md: 'sm', '2xl': 'md'}}>
              Participation
            </Text>
            <Heading fontSize={{md: 'xl', '2xl': '2xl'}} fontFamily={'Outfit'} letterSpacing={-0.5}>
              158 K
            </Heading>
            <Text mt={{md: 2, '2xl': 4}} fontSize={{md: 'sm', '2xl': 'md'}} lineClamp={4}>
              Nous sommes ravie de compté plus de <Span fontFamily={'Outfit'}>150 000</Span> Visiteurs pour cette evenements.
            </Text>
          </Box>
        </Box>

      </Flex>



      {/* floatting button */}
      <IconButton position={'fixed'} bottom={4} right={4} shadow={'lg'} zIndex={1000} onClick={toggleColorMode} variant={'solid'} rounded={'full'}>
        <Icon boxSize={4}>
            {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
        </Icon>
      </IconButton>
    </Box>
  )
}

export default ModelOne
