import { Box, Breadcrumb, Button, DataList, Flex, GridItem, Heading, HStack, Icon, IconButton, Image, Link, SimpleGrid, Skeleton, Span, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import Navbar from '../Components/Navbar'
import {LuShare2, LuWheat } from 'react-icons/lu'
import { GiImperialCrown, GiLaurelCrown, GiStarsStack } from 'react-icons/gi'
import CompareCandidates from './CompareCandidates'
import OtherCandidates from './OtherCandidates'

const DetailsPage = (props) => {

  let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

    const textGhost = useColorModeValue('gray.600', 'gray.400')

    const themeColors = {
      primary: '#e5880fff'
    }
      const [palette, setPalette] = useState({color: 'gray.900', shadow: ''})
      const items = [
      { label: "Age", value: 
        '18 Ans'
      },
      { label: "Profession", value: "Rappeur" },
      { label: "Origine", value: "Turquie" },
    ]

    useEffect(() => {
      switch (props.place) {
      case 'first':
        setPalette({color: 'yellow.300#yellow.500', shadow: "0 0 20px rgba(255, 196, 0, 0.7)"})
        break;
      case 'second':
        setPalette({color: 'orange.300#orange.500', shadow: "0 0 20px rgba(255, 107, 2, 0.7)"})
        break;
      case 'third':
        setPalette({color: 'gray.300#gray.600', shadow: "0 0 20px rgba(95, 95, 91, 0.7)"})
        break;
    
      default:
      setPalette({color: 'gray.800#orange.500', shadow: '0 0 20px rgba(95, 95, 91, 0.7)'})
      }
    }, [props.place])
  return (
    <Box>

      <Box  position={'relative'} pb={8} pt={20}>
      <Box pos={'fixed'} zIndex={1000} top={0}>
        <Navbar/>
      </Box>
      {/* <Box bgColor={useColorModeValue('white', 'gray.800')}
        w={'full'}
        pb={1}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('blackAlpha.200', 'gray.700')}
        transition={'0.5s position all ease-in-out'}
        top='0' display={'flex'} justifyContent={'center'} alignItems={'center'}>
         <Flex my={1} mt={2} gap={0} justify={'left'} align={'center'} pos={'relative'} w={{md: 'xl', base:'full'}} px={{md: 'inherit', base: 4}} >
            {/* <Box >
              <Image pos={'absolute'} bgColor={'white'} src={img6} zIndex={10} top={0} left={{md: 1, base: 6}}  w={{md: '2.5em', base: '2.5em'}} />
            </Box>
            <Flex border={'1px solid'}   align={'center'} fontFamily={'xl'} borderColor={useColorModeValue('blackAlpha.200', 'gray.700')} position={'relative'} w={'full'}>
              <Input border={'none'}
                pl={{md: 24, base: 4}}
                fontFamily={'Inter'} 
                placeholder='Recherchez une candidate' 
                _focusVisible={{
                outlineColor: 'none',
              }}/>
              <IconButton size={'md'}   colorScheme='yellow'>
                <LuSearch/>
              </IconButton>
            </Flex>
          </Flex>   
      </Box> */}
      
      <Box w={'full'} px={{md: 20, '2xl': "21%", base: 4}} mt={{md: 'inherit', '2xl': 10, base: 1}}  py={4} mb={10}>
        <SimpleGrid gridTemplateColumns={{md: '2fr 1fr', base: '1fr'}} w={'full'} gap={{md: 6, base: 4}} position={'relative'}>
              <GridItem w={'full'}>
                {/* indicator  */}
                <Breadcrumb.Root fontSize={{md: 'xl', '2xl': '2xl', base: 'md'}}>
                  <Breadcrumb.List>
                    <Breadcrumb.Item>
                      <Breadcrumb.Link href='/showup/Toutes les catégories'>Categories</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                      <Breadcrumb.CurrentLink noOfLines={1}>Meilleurs Chanteuses</Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                  </Breadcrumb.List>
                </Breadcrumb.Root>
                <Skeleton loading={false} mt={6} noOfLines={2} >
                  <Heading noOfLines={2} fontWeight={'medium'} mt={6} fontSize={{'2xl': '4xl', md: '3xl', base: '2xl'}} fontFamily={'Momo Trust Display'}>
                    Djilo Jorja
                  </Heading>
                </Skeleton>
                <Text mt={{md: 1, '2xl': 2, base: 1}} fontSize={{'2xl': 'lg', md: 'md', base: 'sm'}}><Link>nomminé au concours </Link> <Span fontWeight={'bold'} fontFamily={'Onest'}>Best Talent Cameroun</Span></Text>
                <Box p={2} rounded={'md'} bgColor={useColorModeValue('blackAlpha.100', 'gray.800')} mt={4}>
                  <Text fontSize={{'2xl': 'md', md: 'md', base: 'sm'}}>Dans la categorie:  Meilleures Chanteuse </Text>
                </Box>

                {/* Image */}

                <Box display={'flex'} overflow={'hidden'} alignItems={'center'} position={'relative'} justifyContent={'center'} mt={4} w={'full'}  h={{'2xl': '500px', md: '400px', base: '310px'}}
                  bgGradient={'to-tl'}
                  gradientFrom={'orange.500'}
                  gradientTo={'blue.500'}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${themeColors.primary}40`,
                      `0 0 40px ${themeColors.primary}60`,
                      `0 0 20px ${themeColors.primary}40`
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                // bgImage={`url(${require('../../../assets/Main/candidate.jpeg')})`}
                // bgRepeat={'no-repeat'}
                // bgPos={'center'}
                // bgSize={'400px 500px'}
                rounded={14}
                >
                  <Image
                  objectFit={{md: 'inherit', base: 'contain'}}
                    src={require('../../../assets/Main/candidate.jpeg')}
                    w={{'2xl': '400px', md: '350px', base: 'full'}}
                    h={{'2xl': '500px', md: '400px', base: 'full'}}
                    zIndex={2}
                  />

                  <Heading left={4} rotate={'10deg'} opacity={0.5} zIndex={1} fontSize={{'2xl': '9xl', md: '8xl', base: '6xl'}} position={'absolute'} fontFamily={'Momo Trust Display'} fontWeight={ isIOSDevice && 'medium'}>
                    Djilo 
                  </Heading>

                  <Heading right={4} rotate={'10deg'} opacity={0.5} zIndex={1} fontSize={{'2xl': '9xl', md: '8xl', base: '6xl'}} position={'absolute'} fontFamily={'Momo Trust Display'} fontWeight={ isIOSDevice && 'medium'}>
                    Jorja 
                  </Heading>

                </Box>
                
              </GridItem>

              <GridItem top={{'2xl': '18.9em',md: '5.4em', base: 'inherit'}} position={{md: 'sticky', base: 'inherit'}} width='full' border={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.800')} rounded={14} p={4}  mt={{md: 0, base: 4}} h={{md: 'max-content', base: 'full'}} >
                <Flex gap={2} align={'center'} justify={'space-between'} mb={2}>
                  
                  <HStack position={'relative'}
                  _before= {{
                    content: "''",
                    position: 'absolute',
                    w: {md: '26%', base: '24%'},
                    h: '2px',
                    rounded: 'full',
                    bottom: {md: -2, base: -2},
                    bgGradient: 'to-tr', 
                    gradientFrom: useColorModeValue('blue.400', 'blue.500'),
                    gradientTo: useColorModeValue('orange.500', 'orange.800')
                  }}
                  >
                    <Icon color={palette.color.split('#')[1]} boxSize={8}>
                      {props.place ? props.place === 'first' ?  <GiImperialCrown/>  : <GiLaurelCrown/> : <GiStarsStack/>}
                    </Icon>   
                    <Span fontWeight={500} fontFamily={'Parisienne'} fontSize={'2xl'}>Rang</Span><Heading fontFamily={'Outfit'}>#3</Heading>
                  </HStack>

                  <VStack 
                    gap={0} mr={2}>
                    <Text fontSize={{md: 'sm', '2xl': 'lg', base: 'md'}} fontFamily={'Outfit'} fontWeight={600}>
                      1520
                    </Text>
                    <Text fontSize={{md: 'xs', '2xl': 'sm', base: 'sm'}}>votes</Text>
                  </VStack>

                 
                </Flex>
                
                <Text fontSize={'sm'} mt={2}> </Text>

                <Box mt={4} w={'full'}>
                  
                  <Text mt={2} color={textGhost} fontSize={'sm'} fontFamily={'Inter'}>
                    Biographie
                  </Text>
          
                  <Text mt={2} fontSize={'sm'} lineClamp={4} fontFamily={'Onest'}>
                    William Mundala, connu sous le nom de scène Tiakola, est un artiste français d'origine congolaise né le 4 décembre 1999 à Bondy. Surnommé « La Mélo » pour son talent à mêler rap et mélodies entraînantes, il s'est imposé en 2026 comme l'une des figures centrales de la scène musicale francophone.
                  </Text>

                  <Box w={'full'}>
                    <DataList.Root mt={3}  orientation="horizontal"  w={'full'}>
                      {items.map((item) => (
                        <DataList.Item key={item.label} pt="1">
                          <DataList.ItemLabel fontFamily={'Onest'}>{item.label}</DataList.ItemLabel>
                          <DataList.ItemValue fontFamily={'Inter'}>{item.value}</DataList.ItemValue>
                        </DataList.Item>
                      ))}
                    </DataList.Root>
                  </Box>
          

                  {/* <Accordion.Root>
                    <Accordion.Item>
                      
                        <Accordion.ItemTrigger>
                          <Box as='span' flex='1' textAlign='left'>
                            Couleurs (05)
                          </Box>
                          <Accordion.Icon />
                        </Accordion.Button>
                      
                      <Accordion.Panel pb={4}>
                        
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <h2>
                        <Accordion.Button>
                          <Box as='span' flex='1' textAlign='left'>
                            Taille (01)
                          </Box>
                          <Accordion.Icon />
                        </Accordion.Button>
                      </h2>
                      <Accordion.Panel pb={4}>
                        Taille unique
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion.Root> */}

                

                  {/* <Flex align={'center'} mt={4}>
                    <Text fontWeight={'bold'}>Note</Text>
                  </Flex>
                  <Text mt={2} fontSize={'sm'}>votez maintenant et obtenez un bonus de votes supplementaires.</Text> */}
                </Box>
                <Flex flexDir={{md: 'row', base: 'column'}} mt={8} gap={4}>
                  <Button size={{'2xl': 'xl', md: 'lg', base: 'md'}} flex={{md: 1, base: 'inherit'}} rounded={'full'}>
                    <LuWheat/> Voter maintant
                  </Button>
                  <IconButton  size={{'2xl': 'xl', md: 'lg', base: 'md'}}  variant={'surface'} rounded={'full'}>
                    <LuShare2/>
                  </IconButton>
                </Flex>
              </GridItem>


              <GridItem mt={{md: 0, base: 6}}>
                  
                  
                <CompareCandidates/>

                {/* OTHERS ARTICLE */}



                <Box mt={{md: 20, base: 14}}>
                  <Heading fontSize={{md: '3xl', '2xl': '4xl', base: '2xl'}} fontFamily={'Poppins'}>
                    Vous pourriez <Span color={'orange.500'}>aime</Span>
                  </Heading>
                  <Text fontFamily={'Onest'} fontSize={{md: 'md', '2xl': 'xl', base: 'md'}} mt={{md: 4, base: 1}}>
                    Dans la meme categorie
                  </Text>
                </Box>
                <Box mt={{md: 20, base: 10}}>
                  <OtherCandidates/>
                </Box>
              </GridItem>
        </SimpleGrid>

      </Box>
    </Box>
    </Box>
  )
}

export default DetailsPage
