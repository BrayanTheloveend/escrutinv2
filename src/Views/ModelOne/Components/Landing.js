import { Box, Button, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Image, Span, Text } from '@chakra-ui/react'
import React from 'react'
import {  LuFingerprint, LuGift, LuMousePointer2, LuPlay } from 'react-icons/lu'
import { useColorModeValue } from '../../../Components/ui/color-mode'


const Landing = () => {



  let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

  //const cardColor = useColorModeValue('white', 'gray.900')
    
  return (
        <Box borderBottom={'1px solid'} borderColor={useColorModeValue('gray.100', 'gray.800')} w={'full'} px={{md: 10, base: 1}} py={{md: 6, base: 8}} rounded={40} h={'full'} bgGradient={'to-tr'} gradientFrom={useColorModeValue('blue.400', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.800')}>
          <Grid gap={{md: 'inherit', base:  isIOSDevice ? 16 : 20}} px={{md: 'inherit', '2xl': "19%", base: 4}} gridTemplateColumns={{md: '4fr 3fr', base: '1fr'}} py={{md: 8, '2xl': '10%'}}>

            {/* LeftSide */}
            <GridItem  >
            {/* placeItems center */}
              <HStack gap={2}>
                <Box color={useColorModeValue('blue.500', 'blue.200')} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={useColorModeValue('blue.100', 'blue.700')} boxSize={{md: 12, base: 10}} rounded={'full'}>
                  <Icon boxSize={5}>
                    <LuGift/>
                  </Icon>
                </Box>
                <Box>
                  <Text fontFamily={'Onest'} fontWeight={600} fontSize={{md: 'xl', '2xl': '2xl', base: 'lg'}}>
                    Qui es le meilleur Artiste ?
                  </Text>
                  <Text fontSize={{md: 'sm', '2xl': 'md', base: 'sm'}}>
                    Vient et vote pour ton favoris
                  </Text>
                </Box>
              </HStack>

              <Heading textAlign={{md: 'inherit', base: 'center'}} position={'relative'} _before= {{
                content: "''",
                position: 'absolute',
                w: {md: '30%', base: '20%'},
                h: '2px',
                rounded: 'full',
                bottom: {md: -10, base: -4},
                bgColor: useColorModeValue('gray.700','gray.100')
              }}
              fontSize={{md: '7xl', '2xl': '9xl', base: '4xl'}} fontWeight={ isIOSDevice && 'medium'} color={useColorModeValue('gray.800', 'white')} lineHeight={1.1} fontFamily={'Momo Trust Display'} mt={{md: 8, '2xl': 20, base: 10}}>
                Best Talent Cameroun

                <Span position={'absolute'} top={{md: -8, base: -6}} right={{md: 'inherit', base: 2}} fontFamily={'Parisienne'} textAlign={'right'} fontSize={{md: '2xl', '2xl': '4xl', base: 'xl'}}>
                  édition 6
                </Span>
              </Heading>


              <Box mt={{md: 16, '2xl': 20, base: isIOSDevice ? 10 : 8}} fontFamily={'Inter'}>
                <Text fontSize={{md: 'xl', '2xl': '2xl', base: 'lg' }} maxW={{md: 'md', '2xl': 'xl'}}>
                  N'attendez pas la fin pour vous affirmez.
                  Ton vote peux faire toute la différence
                </Text>
              </Box>

              <HStack flexDir={{md: 'row', base: 'column'}} mt={{md: 8, '2xl': 10, base: 6}} gap={4}>
                <Button size={{md: 'xl', '2xl': '2xl', base: 'lg'}} p={5} 
                 rounded={'full'}
                 fontFamily={'Outfit'}
                 w={{md: 'inherit', base: 'full'}}
                 //bgGradient={'to-r'} gradientFrom={'blue.600'} gradientTo={'orange.500'}
                  colorPalette={'blue'}
                >
                  Votez maintenant
                </Button>

                <Button size={{md: 'xl', '2xl': '2xl', base: 'lg'}} p={5} 
                 rounded={'full'}
                 w={{md: 'inherit', base: 'full'}}
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
            <GridItem placeItems={{md: 'inherit', '2xl': 'end', base: 'center'}}>
              
              <Box>

                <Box display={'flex'} position={'relative'} justifyContent={'center'} alignItems={'center'} w={{md: '320px', '2xl': '520px', base: 'full'}} h={{md: '500px', '2xl': '800px', base: '500px'}} bgColor={'blue.300'} rounded={24}>
                  
                  {/* Lecteur vidéo intégré */}
                  <Box zIndex={1} rounded={24} as="iframe" w={{md: '320px', '2xl': '520px', base: 'full'}} h={{md: '500px', '2xl': '800px', base: '500px'}} src="https://www.youtube.com/embed/vaeio3idHzU?si=aEqKo0sIGLZqfR4_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                  </Box>

                  <IconButton position={'absolute'} zIndex={0} size={'xl'} rounded={'full'}>
                    <LuPlay/>
                  </IconButton>



                  <Box zIndex={2} left={{md: -44, base: -4}} top={{md: 20, base: 'inherit'}} bottom={{md: 'unset', base: 16}} position={'absolute'}  display={'flex'} justifyContent={{md: 'end', base: 'left'}} alignItems={{md: 'end', base: 'start'}} flexDir={'column'} gap={1}>
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
                    zIndex={2}
                    boxSize={40}
                    display={{md: 'block', base: 'none'}}
                    rounded={24}
                    position={'absolute'}
                    top={8}
                    right={-28}
                    p={5}                          // Espacement intérieur
                    bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                    backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
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
                    zIndex={2}
                    position={'absolute'}
                    bottom={{md: 8, base: 'inherit'}}
                    top={{md: 'inherit', base: 14}}
                    display={{md: 'flex', base: 'none'}}
                    gap={4}
                    right={-40}
                    bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                    backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
                    p={{md: 4, base: 2}}                          // Espacement intérieur
                    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Une ombre subtile pour un effet 3D
                    border="1px solid rgba(255, 255, 255, 0.3)" // Une bordure semi-transparente pour simuler le bord du verre                 // Couleur du texte
                  >
                    <Image 
                    src='https://www.newstoriesafrica.com/wp-content/uploads/2023/05/Capture-decran-2023-05-22-144750.png' 
                    boxSize={{md: 24, base: 20}}
                    rounded={18}
                    />
                    <Box maxW={40}>
                      <Text fontSize={{md: "xl", base: 'lg'}} fontWeight={'medium'} fontFamily={"Onest"}>Rejoignez-Nous</Text>
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
