import { Box, Flex,  Heading,  Icon, IconButton  } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Components/Navbar'
import { useColorMode, useColorModeValue } from '../../Components/ui/color-mode'
import { LuMoon,  LuSun } from 'react-icons/lu'

import Landing from './Components/Landing'
import TopCandidates from './Components/TopCandidates'
import OtherCandidates from './Components/OtherCandidates'
import CountDown from './Components/CountDown'
import Partners from './Components/Partners'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

const ModelOne = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const cardColor = useColorModeValue('white', 'gray.900')
  //const textGhost = useColorModeValue('gray.600', 'gray.500')
  // const dashboardBg= useColorModeValue('#ffffffff', 'gray.950')
  

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
    

      <Flex  w={'full'} py={{md: 20, '2xl': 24}} justify={'center'} align={'center'} gap={8} position={'relative'} overflow={'hidden'}>


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

        {/* Countdown */}

        <CountDown/>

        {/* top right svg  */}

        <Box boxSize={'200px'} opacity={0.6} position={'absolute'} top={-24} right={-24}>
          <svg viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M154.12 137.79L153.27 137.14C164.58 122.29 170.56 104.55 170.56 85.83C170.56 56.83 155.97 30.15 131.53 14.46L132.11 13.56C156.86 29.44 171.63 56.46 171.63 85.83C171.63 104.78 165.57 122.75 154.12 137.79Z" fill="#4584f9"/>
            <path d="M85.82 171.64C38.5 171.64 0 133.14 0 85.82C0 38.5 38.5 0 85.82 0V1.06999C39.09 1.06999 1.08 39.09 1.08 85.81C1.08 132.54 39.1 170.55 85.82 170.55C99.94 170.55 113.92 167.01 126.24 160.31L126.75 161.25C114.27 168.06 100.11 171.64 85.82 171.64Z" fill="#4584f9"/>
            <path d="M45.21 151.88C22.09 137.64 8.29004 112.94 8.29004 85.82H10.44C10.44 112.19 23.86 136.2 46.34 150.05L45.21 151.88Z" fill="#4584f9"/>
            <path d="M85.82 163.36C77.32 163.36 68.97 161.99 60.99 159.3L61.68 157.27C69.44 159.89 77.56 161.22 85.83 161.22C124.66 161.22 156.91 132.13 160.82 93.55L162.96 93.77C158.92 133.43 125.76 163.36 85.82 163.36Z" fill="#4584f9"/>
            <path d="M160.24 73.78C157.43 56.29 148.45 40.26 134.94 28.65C121.29 16.91 103.84 10.45 85.82 10.45C71.27 10.45 57.15 14.6 44.98 22.46C30.8 31.62 19.98 45.42 14.51 61.32L12.48 60.62C18.1 44.27 29.23 30.08 43.81 20.66C56.33 12.58 70.85 8.31 85.81 8.31C104.35 8.31 122.29 14.96 136.33 27.03C150.22 38.97 159.46 55.46 162.35 73.45L160.24 73.78Z" fill="#4584f9"/>
            <path d="M85.8201 141.82C54.9401 141.82 29.8201 116.7 29.8201 85.82C29.8201 73.32 33.8501 61.5 41.4601 51.64L43.1601 52.95C35.8401 62.44 31.9701 73.8 31.9701 85.82C31.9701 115.51 56.1301 139.67 85.8201 139.67C91.0901 139.67 96.3001 138.91 101.29 137.41L101.91 139.47C96.7101 141.04 91.2901 141.82 85.8201 141.82Z" fill="#4584f9"/>
            <path d="M123.64 127.12L122.19 125.54C133.3 115.36 139.67 100.89 139.67 85.83C139.67 75.23 136.59 64.97 130.77 56.16L132.56 54.98C138.62 64.14 141.82 74.81 141.82 85.84C141.81 101.49 135.19 116.54 123.64 127.12Z" fill="#4584f9"/>
            <path d="M119.32 43.66C109.71 36.01 98.12 31.97 85.82 31.97C75.03 31.97 64.62 35.15 55.71 41.17L54.51 39.39C63.77 33.13 74.6 29.83 85.82 29.83C98.62 29.83 110.67 34.03 120.66 41.99L119.32 43.66Z" fill="#4584f9"/>
            <path d="M85.8199 132.2C78.2799 132.2 70.7899 130.35 64.1699 126.85L64.6699 125.9C71.1399 129.32 78.4499 131.13 85.8099 131.13C106.14 131.13 124.1 117.46 129.49 97.88L130.52 98.17C125.02 118.21 106.63 132.2 85.8199 132.2Z" fill="#4584f9"/>
            <path d="M53.0299 118.63C44.2699 109.87 39.4399 98.22 39.4399 85.83C39.4399 60.26 60.2399 39.45 85.8199 39.45C111.39 39.45 132.2 60.26 132.2 85.83H131.13C131.13 60.85 110.81 40.53 85.8299 40.53C60.8499 40.53 40.5299 60.85 40.5299 85.83C40.5299 97.93 45.2399 109.31 53.8099 117.87L53.0299 118.63Z" fill="#4584f9"/>
            <path d="M85.82 114.67C69.91 114.67 56.97 101.73 56.97 85.82C56.97 69.91 69.91 56.97 85.82 56.97V59.12C71.1 59.12 59.12 71.1 59.12 85.82C59.12 100.54 71.1 112.52 85.82 112.52C100.54 112.52 112.52 100.54 112.52 85.82H114.67C114.66 101.73 101.72 114.67 85.82 114.67Z" fill="#4584f9"/>
            <path d="M85.82 100.16C77.91 100.16 71.48 93.73 71.48 85.82H72.55C72.55 93.13 78.5 99.08 85.81 99.08C93.12 99.08 99.07 93.13 99.07 85.82C99.07 78.51 93.12 72.56 85.81 72.56C81.75 72.56 77.97 74.38 75.43 77.56L74.59 76.89C77.33 73.45 81.42 71.48 85.81 71.48C93.72 71.48 100.15 77.91 100.15 85.82C100.15 93.73 93.72 100.16 85.82 100.16Z" fill="#4584f9"/>
          </svg>
        </Box>

      </Flex>

      <TopCandidates/>

      <OtherCandidates/>

      <Box px={10} mt={10}>
        <Heading mb={14} letterSpacing={-0.5} fontFamily={'Poppins'} textAlign={'center'} fontSize={'4xl'}>
          Nos Partenaires
        </Heading>
        <Partners/>
      </Box>

      <FAQ/>

      <Footer/>



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
