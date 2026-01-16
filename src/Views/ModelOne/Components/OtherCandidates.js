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

  return (
    <Box px={{md: 24, '2xl': "19%"}} w={'full'} py={20} flexDir={'column'}  justify={'center'} align={'center'} gap={28} position={'relative'} overflow={'hidden'}>
        <Flex w={'full'} justify={'space-between'} align={'center'}>
            <Box>
                <Heading fontSize={'4xl'} fontFamily={'Poppins'}>
                    Vous aimeriez <Span color={'orange.500'}>peut être</Span>
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

            <Carousel.Root slideCount={otherCandidatesData.length} slidesPerPage={6.5} maxW="full" mx="auto">
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
            <Button rounded={'full'} variant={'surface'}>
                Charger plus de candidates
            </Button>
        </Flex>

    </Box>
  )
}

export default OtherCandidates
