import {  Box, Button, DataList, defineStyle, Flex, Heading, HStack, Span, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { LuCheck, LuX } from 'react-icons/lu'

const MainManage = () => {
    const textGhost = useColorModeValue('gray.600', 'gray.400')
    const cardColor = useColorModeValue('white', 'gray.900')
    
    const items = [
  { label: "Noms", value: "Tiakola Melo" },
  { label: "email", value: "marina@gmail.com" },
  { label: "Age", value: 
    '18 Ans'
   },
  { label: "Profession", value: "Rappeur" },
]
  return (
    <Box>
      <Text fontSize="md" mt={3} fontWeight="bold" fontFamily={'Onest'}>Détails</Text>
      <Text fontSize="sm" fontFamily={'Inter'} mb={4} color={textGhost}>Candidates N ° 10</Text>

      <Box>


        <Box w="full" my={2} mb={4} bgColor={cardColor} h="210px" p={4} rounded={20} shadow={'md'} fontSize="2.5rem"
          bgPos={'center'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
          display={'flex'}
          alignItems={'end'}
          position={'relative'}
          bgImage={`url(${'https://www.radiofrance.fr/s3/cruiser-production/2022/05/989edb98-f2a3-431b-8f16-3b94ada3126b/1200x680_tiakola.jpg'})`}
          _before={{
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: 10,
            height: "60%" ,// rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) La moitié inférieure de la carte
            bgGradient: 'to-t',
            gradientFrom: 'rgba(0, 0, 0, 0.9)',
            gradientTo: 'transparent',
            // backdropFilter:"auto",
            // backdropBlur:"6px",
            roundedBottom: 20,
            //bgGradient: "linear(to-t, blackAlpha.700, transparent)", // Dégradé du noir au transparent
            p: "4",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: 'end'

          }}
         >
          <Box w={'full'} position={'relative'} zIndex={12}>
            <Text fontFamily={'Inter'} fontWeight={'medium'} color={'white'} fontSize={'md'}> Tiakola Melo</Text>
            <HStack align={'baseline'} mt={1} w={'full'} justify={'space-between'}>
              <Tag.Root fontFamily={'Inter'} px={2} py={1} rounded={'full'} colorPalette={'blue'}>
                <Tag.Label>Rang #1</Tag.Label>
              </Tag.Root>
              <Heading fontFamily={'Outfit'} fontSize={'xl'} color={'white'}>
                150 <Span fontFamily={'Inter'} fontSize={'xs'}> Votes</Span>
              </Heading>
            </HStack>
          </Box>
        </Box>

        <DataList.Root  orientation="horizontal" divideY="1px" maxW="md">
          {items.map((item) => (
            <DataList.Item key={item.label} pt="3">
              <DataList.ItemLabel fontFamily={'Onest'}>{item.label}</DataList.ItemLabel>
              <DataList.ItemValue fontFamily={'Inter'}>{item.value}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>

        <Text mt={8} color={textGhost} fontSize={'sm'} fontFamily={'Inter'}>
          Biographie
        </Text>

        <Text mt={4} fontSize={'sm'} lineClamp={4} fontFamily={'Inter'}>
          William Mundala, connu sous le nom de scène Tiakola, est un artiste français d'origine congolaise né le 4 décembre 1999 à Bondy. Surnommé « La Mélo » pour son talent à mêler rap et mélodies entraînantes, il s'est imposé en 2026 comme l'une des figures centrales de la scène musicale francophone.
        </Text>


        <Flex mt={8} gap={4} justify={'center'}>
          <Button variant="subtle" colorPalette="blue" flex="1">
            <LuCheck />
            Modifier
          </Button>        
          <Button variant="subtle" colorPalette="red" flex="1">
            <LuX />
            Supprimer
          </Button>
        </Flex>

        
      </Box>
    </Box>
  )
}

export default MainManage
