import { Avatar, Box, Button, Carousel, DataList, Flex, Heading, IconButton, Tabs, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import { LuChevronLeft, LuChevronRight, LuClipboardList, LuHistory, LuUser } from 'react-icons/lu'
import DataEmpty from '../../../Components/DashboardLayout/DataEmpty'

const Main = () => {
    const textGhost = useColorModeValue('gray.600', 'gray.500')
    const cardColor = useColorModeValue('white', 'gray.900')
    
    const items = [
  { label: "Noms", value: "Miss Cameroun" },
  { label: "Statut", value: 
    <Tag.Root size={'sm'} px={2} fontSize={'xs'} rounded={'full'} fontFamily={'Stack Sans Text'} colorPalette={"green"}>
      <Tag.Label>Actif</Tag.Label>
    </Tag.Root>
   },
  { label: "Debut", value: "12.01.2026" },
  { label: "Fin", value: "25.02.2026" },
  { label: "type", value: "Catégorisé" },
]
  return (
    <Box>
      <Text fontSize="md" mt={3} fontWeight="bold" fontFamily={'Onest'}>Informations</Text>
      <Text fontSize="sm" fontFamily={'Inter'} mb={4} color={textGhost}>Concours Miss Cameroun</Text>

      <Box>

        <DataList.Root  orientation="horizontal" divideY="1px" maxW="md">
          {items.map((item) => (
            <DataList.Item key={item.label} pt="3">
              <DataList.ItemLabel fontFamily={'Onest'}>{item.label}</DataList.ItemLabel>
              <DataList.ItemValue fontFamily={'Inter'}>{item.value}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>

        <Tabs.Root mt={10} defaultValue="activity">
          <Tabs.List>
            <Tabs.Trigger fontFamily={'Onest'} value="activity">
              <LuClipboardList />
              Activité
            </Tabs.Trigger>
            <Tabs.Trigger fontFamily={'Onest'} value="history">
              <LuHistory />
              Historique
            </Tabs.Trigger>
            
          </Tabs.List>
          {/* content */}

          <Tabs.Content value='activity'>
            <DataEmpty />
          </Tabs.Content>

          <Tabs.Content pb={2} value='history'>

            <Box border={'1px solid'} p={2} px={4} borderColor={useColorModeValue('gray.100', 'gray.700')} >
              <Box>
                <Heading fontSize={'sm'} fontWeight={500}>
                  Ajout de candidates
                </Heading>
                <Text fontFamily={'Inter'} fontSize={'xs'} color={textGhost}>
                  27.Sep.2026 18h30
                </Text>
              </Box>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
  
      </Box>
    </Box>
  )
}

export default Main
