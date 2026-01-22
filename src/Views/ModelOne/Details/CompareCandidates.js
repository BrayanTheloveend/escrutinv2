import { Box, Button, Flex, GridItem, Heading, Image, SimpleGrid, Span, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'

const CompareCandidates = () => {


  const cardColor = useColorModeValue('white', 'gray.900')
  let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

  return (
    <SimpleGrid mt={6} h={'200px'} gap={4} columns={3}>

      {/* LEFT */}

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
        <Image
        rounded={14}
          objectFit={{md: 'inherit', base: 'contain'}}
            src={require('../../../assets/Main/candidate.jpeg')}
            w={{md: '50%', base: 'full'}}
            
          />

          <Box p={2} h={'full'} position={'relative'}>
            <Text fontFamily={'Outfit'} fontSize={'sm'}>
              Avant vous
            </Text>
            <Heading mt={2} lineHeight={1.1} lineClamp={2} fontSize={'xl'} fontFamily={'Momo Trust Display'} fontWeight={ isIOSDevice && 'medium'}>
              Stella Brunilla
            </Heading>

            <Text fontFamily={'Onest'} mt={4}>
              <Span fontFamily={'Outfit'}>152</Span> votes
            </Text>

            <Button rounded={'full'} mt={2} position={'absolute'} bottom={2}>
              votez ici !
            </Button>
          </Box>
      </GridItem>

      {/* center */}

      <GridItem 
      
      position={'relative'}
      display={'flex'}
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
              <Flex w={14} h={14} transition={'all ease-in-out 0.2s'} bgColor={cardColor}  rounded={'full'} align={'center'} justify={'center'}>
                <Heading fontFamily={'Outfit'} transition={'all ease-in-out 0.2s'} _groupHover={{ fontSize: 'md'}} fontWeight={useColorModeValue(600, 500)}>{`02`}</Heading> 
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
          <Heading mt={2} lineHeight={1.1} lineClamp={2} fontSize={'xl'} fontFamily={'Momo Trust Display'} fontWeight={ isIOSDevice && 'medium'}>
            Marine Carreras
          </Heading>

          <Text fontFamily={'Onest'} mt={4}>
            <Span fontFamily={'Outfit'}>152</Span> votes
          </Text>

          <Button rounded={'full'} mt={2} position={'absolute'} bottom={2}>
            votez ici !
          </Button>
        </Box>
        <Image
        rounded={14}
          objectFit={{md: 'inherit', base: 'contain'}}
            src={require('../../../assets/Main/candidate.jpeg')}
            w={{md: '50%', base: 'full'}}
            
          />
      </GridItem>
    </SimpleGrid>
  )
}

export default CompareCandidates