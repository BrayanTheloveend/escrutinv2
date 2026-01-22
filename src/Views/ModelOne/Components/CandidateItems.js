import { Box, Flex, Heading, HStack, IconButton, Span, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { LuHeart, LuShare2 } from 'react-icons/lu'

const CandidateItems = ({data, resized}) => {

    const cardColor = useColorModeValue('white', 'gray.900')

  return (
    <Box className='group' w={ resized ? {md: 'full', '2xl': '320px', base: 'full'} : {md: '260px', '2xl': '360px', base: 'full'}}
        maxW={{md: '300px', '2xl': '400px', base: 'full'}}
        h={{md: '400px', '2xl': '500px', base: '400px'}} overflow={'hidden'} cursor={'pointer'} p={4} border="1px solid" borderColor={useColorModeValue('gray.100', 'gray.800')} bgColor={cardColor} boxShadow={'lg'} rounded={24}>
        <Box 
        
        rounded={24} 
        h={'full'}
        w={'full'}
        bgImage={`url(${data?.image})`}
        bgPos={'center'}
        bgSize={'cover'}
        position={'relative'}
        transition={'all ease-in-out 0.5s'}
        >
        <Box 
            position={'absolute'}
            bottom={0}
            left={0}
            w={'full'} 
            h={{md: '30%', '2xl': '26%'}} 
            bgColor={cardColor}
            transition={'all ease-in-out 0.2s'}
            _groupHover={{
                //  bg: useColorModeValue("rgba(53, 53, 53, 0.25)", "rgba(49, 49, 49, 0.45)"),  //Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                //  backdropFilter: "blur(10px)", 
                //  roundedBottom: 20,
               h: {md: '14%', '2xl': '12%'},
                pt: {md: 2, '2xl': 1, base: 0}
                //pt: 0
                //color: 'white'
            }}
            px={2} 
            pt={{md: 4, '2xl': 3, base: 3}}
        >
            <Flex _groupHover={{
                transform: 'translate(23px, -12px)' // 20 50
            }} 
            transition={'all ease-in-out 0.2s'}
            p={1} rounded={'full'} position={'absolute'} bgGradient={'to-tr'} gradientFrom={useColorModeValue('blue.500', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.600')} color={useColorModeValue('gray.800', 'white')} top={-10} right={8}>
                <Flex w={14} h={14} transition={'all ease-in-out 0.2s'} _groupHover={{
                    w : 10,
                    h: 10
                }} bgColor={cardColor}  rounded={'full'} align={'center'} justify={'center'}>
                    <Heading fontFamily={'Outfit'} transition={'all ease-in-out 0.2s'} _groupHover={{ fontSize: 'md'}} fontWeight={useColorModeValue(600, 500)}>{`0${data?.id}`}</Heading> 
                </Flex>
            </Flex>

            <Box _groupHover={{ display: 'none'}}>
                {/* <Text fontFamily={'Poppins'} fontSize={{md: 'lg', '2xl': 'xl'}} fontWeight={600} letterSpacing={-0.5}>{data?.nom}</Text> */}
                <Text fontFamily={'Momo Trust Display'} fontSize={{md: 'lg', '2xl': 'xl'}}>{data?.nom}</Text>
                <Text fontFamily={'Inter'} fontSize={{md: 'sm', '2xl': 'md'}} >{data?.profession}</Text>
            </Box>

            <Flex
                justify={'space-between'} 
                gap={2} mt={3}>

                <HStack transition={'all ease-in-out 0.2s'}>
                    <IconButton transition={'all ease-in-out 0.2s'} _groupHover={{
                        w: 'full'
                    }} size={{md: 'sm', '2xl': 'md', base: 'md'}} colorPalette={'pink'} variant={'surface'} rounded={'full'}>
                        <Span display={'none'} transition={'all ease-in-out 0.1s'} _groupHover={{
                        display: 'block'
                    }}>Voter</Span>
                        <LuHeart/>
                    </IconButton>
                    <IconButton size={{md: 'sm', '2xl': 'md', base: 'md'}} variant={'surface'} rounded={'full'}>
                        <LuShare2/>
                    </IconButton>
                </HStack>

                <VStack 
                 gap={0} mr={2}>
                    <Text fontSize={{md: 'sm', '2xl': 'md'}} fontWeight={500}>
                        {data?.totalVotes}
                    </Text>
                    <Text fontSize={{md: 'xs', '2xl': 'sm'}}>votes</Text>
                </VStack>

            </Flex>
            {/* <Button></Button> */}

        </Box>

        </Box>
    </Box>
  )
}

export default CandidateItems
