import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const OverviewCard = ({ title, subtitles, value, icon, label , gradient}) => {
  return (
    <Box
        p="4" // Padding intérieur
        rounded={20} // Coins arrondis (xl est une valeur prédéfinie)
        width={{ base: "full", md: "full", '2xl': "240px" }}
        height={{ base: "280px", md: "160px", '2xl': "260px" }}
        // Utilisation de bgGradient pour le dégradé de fond
        
      bgGradient="to-br"
      gradientTo={ gradient[0] || 'rgba(255, 180, 200, 0.7)'}
      gradientVia={gradient[1] || 'rgba(255, 200, 150, 0.7)'}
      gradientFrom={gradient[2] || 'rgba(150, 180, 255, 0.7)'}
      // Utilisation de boxShadow pour une ombre portée
      boxShadow="md" // Une ombre douce
      // Utilisation de backdropFilter pour l'effet de verre flou
      backdropFilter="blur(10px)" 
      // border="1px solid rgba(255, 255, 255, 0.3)" // Bordure subtile
    >
      <Flex direction="column" justify="space-between" h="full">
        {/* En-tête */}
        <Flex justify="space-between" fontFamily={'Onest'} align="flex-start">
          <VStack align="start" gap={0} spacing={0}>
            <Text fontSize={{md: "sm", '2xl': 'md'}} fontWeight="medium" lineHeight="short">{title}</Text>
            <Text fontSize={{md: "xs", '2xl': 'sm'}} fontWeight="medium" lineHeight="short">{subtitles}</Text>
          </VStack>
          <Box
            bg="rgba(199, 192, 192, 0.3)"
            borderRadius="full"
            p={{md: "2", '2xl': 3}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            backdropFilter="blur(5px)" // Flou supplémentaire pour l'icône
          >
            {/* Utilisation d'un composant Icon */}
            <Icon w={{md: 4, '2xl': 6}} h={{md: 4, '2xl': 6}} color="black" >
              {icon}
            </Icon>
          </Box>
        </Flex>

        {/* Pied de page */}
        <Box>
          <Text fontSize={{ base: "2", md: "xl", '2xl': "4xl" }} fontWeight={{"2xl": "bold", md: 500}} fontFamily={'Outfit'} mt={2}>{value}</Text>
          <Text fontSize={{md: "xs", '2xl': 'sm'}} fontFamily={'Inter'} fontWeight="medium" opacity={0.7}>{label}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default OverviewCard