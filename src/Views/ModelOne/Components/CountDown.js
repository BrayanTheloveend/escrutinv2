import { Box, Flex, Heading, HStack, Icon, Span, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { LuCalendar, LuCrown } from 'react-icons/lu'
import { useColorModeValue } from '../../../Components/ui/color-mode'

const CountDown = () => {

    const cardColor = useColorModeValue('white', 'gray.900')
    const textGhost = useColorModeValue('gray.600', 'gray.500')

    let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

  return (
    <Flex mt={{md: 'inherit', base: isIOSDevice ? '19em' : '28em'}} flexDir={{md: 'row', base: 'column'}} justify={'center'} align={'center'} gap={8}>
        <Box 
          maxW={{md: '260px', '2xl': '310px', base: '90%'}} 
          boxShadow={'sm'} 
          bgColor={cardColor} 
          border={'2px solid'} 
          borderColor={useColorModeValue('blue.200', 'blue.800')} 
          p={6} 
          rounded={24} 
          roundedTopLeft={10}
          backdropFilter={'blur(10px)'}
          >
          <Box float={'right'} display={'flex'} justifyContent={'center'} alignItems={'center'} boxSize={{md: 10, '2xl': 12, base: 8}} rounded={'full'} bgColor={'blue.500'} color={'white'}>
            <Icon boxSize={{md: 4, '2xl': 5, base: 4}}>
              <LuCalendar/>
            </Icon>
          </Box>
          <Box mt={2}>
            <Text color={textGhost} letterSpacing={-0.5} fontWeight={'medium'} fontSize={{md: 'sm', '2xl': 'md'}}>
              Fin du concours
            </Text>
            <Heading fontFamily={'Onest'} fontSize={{md: 'xl', '2xl': '2xl', base: 'lg'}} letterSpacing={-0.5}>
              20 Janvier 2026
            </Heading>
            <Text mt={{md: 2, '2xl': 4, base: 3}} fontSize={{md: 'sm', '2xl': 'md', base: 'sm'}} lineClamp={4}>
              Nous vous encourageons à consulter notre site web pour des détails supplémentaires.
            </Text>
          </Box>
        </Box>


        <Box>
          <VStack spacing={4} gap={4}>
            {/* <Text fontFamily={'Lobster Two'} fontSize={{md: '2xl', '2xl': '3xl'}}>Temps restant</Text> */}
            <HStack gap={3}  justify="center" w="full" zIndex={20} position={'relative'}>
              <VStack bgColor={cardColor} boxShadow={'sm'} gap={{md: 'inherit', '2xl':  0}} border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.600')} p={4} px={6} spacing={1} rounded={12}>
                <Text fontFamily={'Outfit'} fontSize={{md: "3xl", '2xl': '5xl', base: 'xl'}} fontWeight="extrabold">
                  {String(25).padStart(2, '0')}
                </Text>
                <Text fontSize={{md: "xs", '2xl': 'sm', base: 'xs'}} opacity={0.9}>Jours</Text>
              </VStack>
              <Text fontSize="2xl" opacity={0.7}>:</Text>
              <VStack bgColor={cardColor} boxShadow={'sm'} gap={{md: 'inherit', '2xl':  0}} border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.600')} p={4} px={6} spacing={1} rounded={12}>
                <Text fontFamily={'Outfit'} fontSize={{md: "3xl", '2xl': '5xl', base: 'xl'}} fontWeight="bold">
                  {String(15).padStart(2, '0')}
                </Text>
                <Text fontSize={{md: "xs", '2xl': 'sm', base: 'xs'}} opacity={0.9}>Heures</Text>
              </VStack>
              <Text fontSize="2xl" opacity={0.7}>:</Text>
              <VStack bgColor={cardColor} boxShadow={'sm'} gap={{md: 'inherit', '2xl':  0}} border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.600')} p={4} px={5} spacing={1} rounded={12}>
                <Text fontFamily={'Outfit'} fontSize={{md: "3xl", '2xl': '5xl', base: 'xl'}} fontWeight="bold">
                  {String('08').padStart(2, '0')}
                </Text>
                <Text fontSize={{md: "xs", '2xl': 'sm', base: 'xs'}} opacity={0.9}>Minutes</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>

        <Box maxW={{md: '260px', '2xl': '310px', base: '90%'}} boxShadow={'sm'} bgColor={cardColor} border={'2px solid'} borderColor={useColorModeValue('orange.200', 'orange.800')} p={6} rounded={24} roundedTopRight={10}>
          <Box float={'right'} display={'flex'} justifyContent={'center'} alignItems={'center'} boxSize={{md: 10, '2xl': 12, base: 8}} rounded={'full'} bgColor={'orange.500'} color={'white'}>
            <Icon boxSize={{md: 4, '2xl': 5, base: 4}}>
              <LuCrown/>
            </Icon>
          </Box>
          <Box mt={2}>
            <Text color={textGhost} letterSpacing={-0.5} fontWeight={'medium'} fontSize={{md: 'sm', '2xl': 'md'}}>
              Participation
            </Text>
            <Heading fontSize={{md: 'xl', '2xl': '2xl', base: 'lg'}} fontFamily={'Outfit'} letterSpacing={-0.5}>
              158 K
            </Heading>
            <Text mt={{md: 2, '2xl': 4, base: 3}} fontSize={{md: 'sm', '2xl': 'md', base: 'sm'}} lineClamp={4}>
              Nous sommes ravie de compté plus de <Span fontFamily={'Outfit'}>150 000</Span> Visiteurs pour cette evenements.
            </Text>
          </Box>
        </Box>
    </Flex>
  )
}

export default CountDown
