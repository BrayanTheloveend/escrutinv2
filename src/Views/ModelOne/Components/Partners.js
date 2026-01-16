import { Box, Carousel, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'

const Partners = () => {

  const items = Array.from({ length: 5 })
  const cardColor = useColorModeValue('white', 'gray.900')
  
  return (
    <Box py={8} px={{md: 14, base: 4}} bgGradient={'to-r'} gradientFrom={useColorModeValue('blue.400', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.800')} rounded={28} >
      
      <Carousel.Root autoplay slidesPerPage={{ base: 2, md: 5}} slideCount={items.length} maxW="full" mx="auto">
        <Carousel.ItemGroup>
          {Array(15).fill('').map((_, index) => (
          <Carousel.Item key={index} index={index}>
            <Box 
              cursor={'pointer'}
              transition={'all ease-in-out 0.2s'}
              // _hover={{
              //     border: '2px solid',
              //     borderColor: borderColorOnHover,
              //     transform: 'rotate(-10deg)'
              // }}
              boxSize={{md: 28, base: 20}}
              rounded={'full'}
              // bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
              // backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
              p={{md: 5, base: 2}}      
              bgColor={'white'}                    // Espacement intérieur
              boxShadow={'sm'}
              border="2px solid rgba(255, 255, 255, 0.3)" // Une bordure semi-transparente pour simuler le bord du verre                 // Couleur du texte
            >
              <Image
              src={require('../../../assets/Main/logo.png')}
              w={'100%'}
              />
            </Box>
                
             
          </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Root>
    </Box>
  )
}

export default Partners
