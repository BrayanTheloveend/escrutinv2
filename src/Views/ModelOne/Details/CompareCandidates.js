import { Box, Button, Flex, GridItem, Heading, Image, SimpleGrid, Span, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { LuWheat } from 'react-icons/lu'
const CompareCandidates = () => {


  const cardColor = useColorModeValue('white', 'gray.900')
  let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

  return (
    <SimpleGrid mt={6} h={{md: '200px', base: 'inherit'}} gap={4} columns={{md: 3, base: 1}}>

      {/* LEFT */}

      <GridItem 
      boxShadow={'lg'}
      bgColor={cardColor}
      rounded={14}
      p={2}
      display={'flex'}
      gap={2}
      alignItems={'center'}
      justifyContent={{md: 'space-between', base: 'inherit'}}
      >
        <Image
        rounded={14}
          objectFit={{md: 'inherit', base: 'contain'}}
            src={require('../../../assets/Main/candidate.jpeg')}
            w={{'2xl': '50%', md: '55%', base: '150px'}}
            h={{'md': 'full', '2xl': 'inherit'}}
          />

          <Box p={2} h={'full'} position={'relative'}>
            <Text fontFamily={'Outfit'} fontSize={'sm'}>
              Avant vous
            </Text>
            <Heading mt={2} lineHeight={1.1} lineClamp={2} fontSize={{'2xl': 'xl', md: 'md', base: 'md'}} fontFamily={'Momo Trust Display'} fontWeight={{md: isIOSDevice ? 'medium' : 500}}>
              Stella Brunilla
            </Heading>

            <Text fontFamily={'Onest'} mt={4}>
              <Span fontFamily={'Outfit'}>152</Span> votes
            </Text>

            <Button colorPalette={'orange'} variant={'surface'} rounded={'full'} mt={2} position={'absolute'} bottom={2} size={{md: 'xs', "2xl": 'md', base: 'md'}}>
              votez <LuWheat/>
            </Button>
          </Box>
      </GridItem>

      {/* center */}

      <GridItem 
      
      position={'relative'}
      display={{md: 'flex', base: 'none'}}
      gap={2}
      alignItems={'center'}
      justifyContent={'center'}
      >
        <Box 
          w={'2/2'}
          h={'200px'}
          rounded={14}
          p={2}
          boxShadow={'lg'}
          bgColor={cardColor}
          position={'relative'}
        >
          <Image
          rounded={14}
          objectFit={{md: 'inherit', base: 'contain'}}
            src={require('../../../assets/Main/candidate.jpeg')}
            w={{md: 'full', base: 'full'}}
            h={'full'}
            
          />


        </Box>
            <Flex 
            transition={'all ease-in-out 0.2s'}
            p={1} rounded={'full'} position={'absolute'} bgGradient={'to-tr'} gradientFrom={useColorModeValue('blue.500', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.600')} color={useColorModeValue('gray.800', 'white')} top={-10} right={8}>
              <Flex w={{"2xl" : 14, md: 10}} h={{"2xl" : 14, md: 10}} transition={'all ease-in-out 0.2s'} bgColor={cardColor}  rounded={'full'} align={'center'} justify={'center'}>
                <Heading fontFamily={'Outfit'} fontSize={{"2xl": "xl", md: 'md'}} transition={'all ease-in-out 0.2s'} _groupHover={{ fontSize: 'md'}} fontWeight={useColorModeValue(600, 500)}>{`02`}</Heading> 
              </Flex>
            </Flex>

      </GridItem>


      {/* RIGHT */}


      <GridItem 
      boxShadow={'lg'}
      bgColor={cardColor}
      rounded={14}
      p={2}
      display={'flex'}
      gap={2}
      alignItems={'center'}
      justifyContent={'space-between'}
      >
        <Box p={2} h={'full'} position={'relative'}>
          <Text fontFamily={'Outfit'} fontSize={'sm'}>
            Apres vous
          </Text>
          <Heading mt={2} lineHeight={1.1} lineClamp={2} fontSize={{'2xl': 'xl', md: 'md', base: 'md'}} fontFamily={'Momo Trust Display'} fontWeight={{md: isIOSDevice ? 'medium' : 500}}>
            Marine Carreras
          </Heading>

          <Text fontFamily={'Onest'} mt={4}>
            <Span fontFamily={'Outfit'}>152</Span> votes
          </Text>

          <Button colorPalette={'blue'} variant={'surface'} rounded={'full'} mt={2} position={'absolute'} bottom={2} size={{md: 'xs', "2xl": 'md', base: 'md'}}>
            votez <LuWheat/>
          </Button>
        </Box>
        <Image
        rounded={14}
          objectFit={{md: 'inherit', base: 'contain'}}
            src={require('../../../assets/Main/candidate.jpeg')}
            w={{'2xl': '50%', md: '55%', base: '150px'}}
            h={{'md': 'full', '2xl': 'inherit'}}
            
          />
      </GridItem>
    </SimpleGrid>
  )
}

export default CompareCandidates