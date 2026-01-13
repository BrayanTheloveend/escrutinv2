import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Image, Span, Text } from '@chakra-ui/react'
import React from 'react'
import { LuArrowUpRight, LuFingerprint, LuGift, LuMousePointer2, LuPlay } from 'react-icons/lu'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { Link } from 'react-router-dom'

const Landing = () => {

    const cardColor = useColorModeValue('white', 'gray.900')
    
  return (
        <Box borderBottom={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.800')} w={'full'} px={10} py={6} rounded={40} h={'full'} bgGradient={'to-tr'} gradientFrom={useColorModeValue('blue.400', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.800')}>
          <Grid px={{md: 'inherit', '2xl': "19%"}} gridTemplateColumns={'4fr 3fr'} py={{md: 8, '2xl': '10%'}}>

            {/* LeftSide */}
            <GridItem>
              <HStack gap={2}>
                <Box color={useColorModeValue('blue.500', 'blue.200')} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={useColorModeValue('blue.100', 'blue.700')} w={12} h={12} rounded={'full'}>
                  <Icon boxSize={5}>
                    <LuGift/>
                  </Icon>
                </Box>
                <Box>
                  <Heading fontFamily={'Onest'} fontSize={{md: 'xl', '2xl': '2xl'}}>
                    Qui es le meilleur Artiste ?
                  </Heading>
                  <Text fontSize={{md: 'sm', '2xl': 'md'}}>
                    Vient et votre pour ton favoris
                  </Text>
                </Box>
              </HStack>

              <Heading position={'relative'} _before= {{
                content: "''",
                position: 'absolute',
                w: '30%',
                h: '2px',
                rounded: 'full',
                bottom: -10,
                bgColor: useColorModeValue('gray.700','gray.100')
              }}
              fontSize={{md: '7xl', '2xl': '9xl'}} color={useColorModeValue('gray.800', 'white')} lineHeight={1.1} fontFamily={'Momo Trust Display'} mt={{md: 8, '2xl': 20}}>
                Best Talent Cameroun

                <Span position={'absolute'} top={-8} fontFamily={'Parisienne'} textAlign={'right'} fontSize={{md: '2xl', '2xl': '4xl'}}>
                  édition 6
                </Span>
              </Heading>


              <Box mt={{md: 16, '2xl': 20}} fontFamily={'Inter'}>
                <Text fontSize={{md: 'xl', '2xl': '2xl' }} maxW={{md: 'md', '2xl': 'xl'}}>
                  N'attendez pas la fin pour vous affirmez.
                  Ton vote peux faire toute la différence
                </Text>
              </Box>

              <HStack mt={{md: 8, '2xl': 10}} gap={4}>
                <Button size={{md: 'md', '2xl': '2xl'}} p={5} 
                 rounded={'full'}
                 fontFamily={'Outfit'}
                 //bgGradient={'to-r'} gradientFrom={'blue.600'} gradientTo={'orange.500'}
                  colorPalette={'blue'}
                 >
                  Votez maintenant
                </Button>

                <Button size={{md: 'md', '2xl': '2xl'}} p={5} 
                 rounded={'full'}
                 fontFamily={'Outfit'}
                 variant={'surface'}
                 //bgGradient={'to-r'} gradientFrom={'blue.600'} gradientTo={'orange.500'}
                  colorPalette={'blue'}
                 >
                  Participez au concours 
                </Button>

              
              </HStack>
            </GridItem>

            {/* RightSide */}
            <GridItem placeItems={{md: 'inherit', '2xl': 'end'}}>
              
              <Box>
                <Box display={'flex'} position={'relative'} justifyContent={'center'} alignItems={'center'} w={{md: '320px', '2xl': '520px'}} h={{md: '500px', '2xl': '800px'}} bgColor={'blue.300'} rounded={24}>
                  
                  <IconButton size={'xl'} rounded={'full'}>
                    <LuPlay/>
                  </IconButton>



                  <Box left={-44} top={20} position={'absolute'}  display={'flex'} justifyContent={'end'} alignItems={'end'} flexDir={'column'} gap={1}>
                    <HStack w={'max-content'} p={2} px={3} rounded={'full'} bgColor={'white'}>
                      <Flex color={useColorModeValue('white', 'gray.800')} justifyContent={'center'} align={'center'} rounded={4} p={1} bgColor={'orange.500'}>
                        <Icon>
                          <LuMousePointer2/>
                        </Icon>
                      </Flex>
                      <Text color={'gray.800'} fontFamily={'Inter'} fontWeight={'medium'} fontSize={'sm'}>Comment Votez ?</Text>
                    </HStack>

                    <HStack p={2} px={3} rounded={'full'} bgColor={'white'}>
                      <Flex color={useColorModeValue('white', 'gray.800')} justifyContent={'center'} align={'center'} rounded={4} p={1} bgColor={'blue.500'}>
                        <Icon>
                          <LuFingerprint/>
                        </Icon>
                      </Flex>
                      <Text color={'gray.800'} fontFamily={'Inter'} fontWeight={'medium'} fontSize={'sm'}>Tu participez au concours</Text>
                    </HStack>
                  </Box>

                  {/* box glass top */}
                  <Box
                    boxSize={40}
                    rounded={24}
                    position={'absolute'}
                    top={8}
                    right={-28}
                    bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                    backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
                    p={5}                          // Espacement intérieur
                    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Une ombre subtile pour un effet 3D
                    border="1px solid rgba(255, 255, 255, 0.3)" // Une bordure semi-transparente pour simuler le bord du verre                 // Couleur du texte
                  >
                    <Text fontSize="sm" opacity={0.8}>Votes en ligne</Text>
                    <Text fontSize="3xl" fontWeight="bold">100%</Text>
                    <Box>
                      <Text fontSize="md">Rapide</Text>
                      <Text fontSize="sm">Securisé et fiable</Text>
                    </Box>
                  </Box>



                   {/* box glass bottom */}
                  <Box
                    rounded={24}
                    position={'absolute'}
                    bottom={8}
                    display={'flex'}
                    gap={4}
                    right={-40}
                    bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                    backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
                    p={4}                          // Espacement intérieur
                    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Une ombre subtile pour un effet 3D
                    border="1px solid rgba(255, 255, 255, 0.3)" // Une bordure semi-transparente pour simuler le bord du verre                 // Couleur du texte
                  >
                    <Image 
                    src='https://www.newstoriesafrica.com/wp-content/uploads/2023/05/Capture-decran-2023-05-22-144750.png' 
                    boxSize={24}
                    rounded={18}
                    />
                    <Box maxW={40}>
                      <Text fontSize="xl" fontWeight={'medium'} fontFamily={"Onest"}>Rejoignez-Nous</Text>
                      <Text fontSize="sm" mt={1}>Sur les réseaux sociaux afin de ne rien ratez.</Text>
                    </Box>

                  </Box>
                 

                </Box>
              </Box>



            </GridItem>
          </Grid>
        </Box>
    

  )
}

export default Landing
