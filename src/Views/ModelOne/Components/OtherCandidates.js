import { Box, Button, Carousel, Flex, Heading, HStack, IconButton, SimpleGrid, Span, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { LuListRestart, LuSearch } from 'react-icons/lu'
import CandidateItems from './CandidateItems'

const OtherCandidates = () => {

    const otherCandidatesData = [
        {
            id: 4,
            nom: 'Sophia Laurent',
            profession: 'Chanteuse',
            totalVotes: 1520,
            image: 'https://i.pinimg.com/236x/2b/8d/3c/2b8d3c3d1b85ad94dde7df21fc88b41e.jpg'
        },
        {
            id: 5,
            nom: 'Jessica Brown',
            profession: 'Productrice',
            totalVotes: 890,
            image: 'https://i.pinimg.com/originals/b1/78/fc/b178fc7be5d6737b7b07f55bc3503915.jpg'
        },
        {
            id: 6,
            nom: 'Clara Dumont',
            profession: 'Réalisatrice',
            totalVotes: 1105,
            image: 'https://i.pinimg.com/736x/4b/6b/7d/4b6b7d3babf33ed36b223c403de225c5.jpg'
        },
        {
            id: 7,
            nom: 'Djilo Jorda',
            profession: 'mon crush',
            totalVotes: 1105,
            image: 'https://i.pinimg.com/736x/36/a5/cd/36a5cd91f5f02048c4e05e1708c2f8fb.jpg'
        }
    ]

    const borderColorOnHover =  useColorModeValue('orange.400', 'orange.800')

    const vectorColorPrimary = "#fda311"
    const vectorColorSecondary = '#1ea1f8'

  return (
    <Box px={{md: 24, '2xl': "19%"}} w={'full'} py={20} flexDir={'column'}  justify={'center'} align={'center'} gap={28} position={'relative'} overflow={'hidden'}>
        <Flex w={'full'} justify={'space-between'} align={'center'}>
            <Box>
                <Heading fontSize={{md: '4xl', '2xl': '5xl'}} fontFamily={'Poppins'}>
                    Laissez-vous <Span color={'orange.500'}>séduire</Span>
                </Heading>
                <Text fontFamily={'Onest'} mt={4}>
                    Les autres candidates nominées
                </Text>
            </Box>

            <HStack>
                <IconButton variant={'outline'} size={'sm'} rounded={'full'}>
                    <LuSearch/>
                </IconButton>

                <IconButton variant={'surface'} size={'sm'} rounded={'full'}>
                    <LuListRestart/>
                </IconButton>
            </HStack>
        </Flex>

        {/* CategorieItems */}

        <Box mt={10}>

            <Carousel.Root slideCount={otherCandidatesData.length} slidesPerPage={6.5}  maxW="full" mx="auto">
                <Carousel.ItemGroup>
                    {Array(15).fill('').map((_, index) => (
                    <Carousel.Item pl={1} key={index} py={4} index={index}>
                        {/* box glass top */}
                        <Box 
                            cursor={'pointer'}
                            transition={'all ease-in-out 0.2s'}
                            _hover={{
                                border: '2px solid',
                                borderColor: borderColorOnHover,
                                transform: 'rotate(-10deg)'
                            }}
                            boxSize={40}
                            rounded={24}
                            bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                            backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
                            p={5}                          // Espacement intérieur
                            boxShadow={'sm'}
                            border="2px solid rgba(255, 255, 255, 0.3)" // Une bordure semi-transparente pour simuler le bord du verre                 // Couleur du texte
                        >
                            <Text fontSize="sm" mb={3} opacity={0.8}>Categorie</Text>
                            <Text fontSize="md" fontWeight="bold" fontFamily={'Onest'} lineHeight={1.2}>Meilleurs Chanteuses</Text>
                            <Box mt={2}>
                                <Text fontSize="sm">1588 nominées</Text>
                            </Box>
                        </Box>
                    </Carousel.Item>
                    ))}
                </Carousel.ItemGroup>
            </Carousel.Root>
           



        </Box>



        <SimpleGrid columns={4} mt={8} gap={2}>
            {
                otherCandidatesData.map((elt, index)=> <CandidateItems key={index} data={elt} />)
            }
        </SimpleGrid>

        <Flex mt={14} w={'full'} justify={'center'} align={'center'}>
            <Button size={{md: 'md', '2xl': 'xl'}} rounded={'full'} variant={'surface'}>
                Charger plus de candidates
            </Button>
        </Flex>




        {/* SVG TOP RIGHT */}

      


        <Box position={'absolute'} w={{md: '400px', '2xl': '400px'}} h={{md: '400px', '2xl': '400px'}} zIndex={-1} top={'250px'} rotate={'-180deg'} right={'-250px'}>
            <svg viewBox="0 0 379 399" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" d="M192.331 48.8207L35.355 205.797L192.331 362.773L349.307 205.797L192.331 48.8207Z" stroke={vectorColorSecondary} stroke-width="50" stroke-miterlimit="10"/>
                <path opacity="0.7" d="M136.167 242.127C119.957 225.917 119.957 199.647 136.167 183.437L307.447 12.1575C323.657 -4.0525 349.927 -4.0525 366.137 12.1575C382.347 28.3675 382.347 54.6375 366.137 70.8475L194.857 242.127C178.647 258.327 152.377 258.327 136.167 242.127Z" fill="url(#paint0_linear_0_1)"/>
                <defs>
                <linearGradient id="paint0_linear_0_1" x1="136.166" y1="242.123" x2="366.138" y2="12.1511" gradientUnits="userSpaceOnUse">
                <stop stop-color={vectorColorSecondary}/>
                <stop offset="1"  stop-color={vectorColorPrimary}/>
                </linearGradient>
                </defs>
            </svg>


        </Box>


    </Box>
  )
}

export default OtherCandidates
