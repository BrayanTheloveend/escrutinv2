import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, HStack, Icon, SimpleGrid, Span, Tabs, Tag, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { LuArrowUpToLine, LuBadgeSwissFranc, LuBanknote, LuCalendarSearch, LuClipboardList, LuCrown, LuFolder, LuTimer, LuTrendingUp, LuUser } from 'react-icons/lu'
import OverviewCard from './HomeComponents/OverviewCard'
import GrowthRateWidget from './HomeComponents/Meter'
import { useColorModeValue } from '../Components/ui/color-mode'
import DashboardLineChart from './HomeComponents/Charts/DashboardLineChart'


const Home = () => {

  const cardColor = useColorModeValue('white', 'gray.900')
  const textGhost = useColorModeValue('gray.600', 'gray.500')
  const chartSeries = [
  {
    name: 'Courbe Rouge', // Le nom de la série
    data: [
      { label: 'JAN', value: 40 },
      { label: 'FÉV', value: 60},
      { label: 'MAR', value: 45 },
      { label: 'AVR', value: 70 },
      { label: 'MAI', value: 55 },
      { label: 'JUN', value: 65 }
    ]
  },
  {
    name: 'Courbe Bleue',
    data: [
      { label: 'JAN', value: 30 },
      { label: 'FÉV', value: 85 },
      { label: 'MAR', value: 55 },
      { label: 'AVR', value: 80 },
      { label: 'MAI', value: 50 },
      { label: 'JUN', value: 75 }
    ]
  },

  {
    name: 'Courbe Bleue',
    data: [30, 85, 55, 80, 50, 75] // Points de données Y (exemple)
  },
  {
    name: 'Courbe Grise (pâle)',
    data: [50, 30, 70, 45, 35, 60] // Points de données Y (exemple)
  }
];

  const overviewData = [
    {
      title: "Total de votes",
      subtitles: "Mensuel",
      value: "83%",
      label: 'ce mois',
      icon: <LuTimer />,
      gradient: ['rgba(255, 180, 200, 0.7)', 'rgba(255, 160, 71, 0.7)', 'rgba(150, 180, 255, 0.7)']
    },
    {
      title: "Nouveaux utilisateurs",
      subtitles: "",
      value: "1,245",
      label: 'Candidates',
      icon: <LuCalendarSearch />,
      gradient: ['rgba(170, 123, 245, 0.7)', 'rgba(219, 133, 253, 0.7)', 'rgba(20, 126, 247, 0.7)']
    },
    {
      title: "Benifice",
      subtitles: "Total",
      value: "100 k",
      label: '100 058',
      icon: <LuCalendarSearch />,
      gradient: ['rgba(59, 204, 240, 0.7)', 'rgba(109, 194, 250, 0.7)', 'rgba(228, 217, 115, 0.7)']
    },
    {
      title: "Total des concours",
      subtitles: "",
      value: "05",
      label: 'Actif',
      icon: <LuCalendarSearch />,
      gradient: ['rgba(150, 157, 255, 0.7)', 'rgba(226, 58, 198, 0.7)', 'rgba(221, 67, 46, 0.7)']
    },
    
    // Vous pouvez ajouter plus de cartes ici
  ];
  return (

    <Box>
      <Text fontSize={{md: "2xl", '2xl': '4xl'}} fontWeight="bold" fontFamily={'Onest'}>Tableau de bord</Text>
      <SimpleGrid columns={{md: 4, '2xl': 7}} mt={5} gap={{'2xl': 16, md: 4, base: 2}} >
        {overviewData.map((data, index) => (
          <OverviewCard
            key={index}
            title={data.title}
            subtitles={data.subtitles}
            value={data.value}
            icon={data.icon}
            label={data.label}
            gradient={data.gradient}
          />
        ))}
        {/* <Flex flexDir={'column'} gap={6} flexWrap={'wrap'}> 
            <GrowthRateWidget value={36} /> 
        </Flex>*/}
        {/* <GridItem colSpan={2}>
          <SimpleGrid colomns={2} gap={6}>
            <Box rounded={20} boxShadow={'sm'}>

            </Box>
          </SimpleGrid>
        </GridItem> */}
        
      </SimpleGrid>

      <SimpleGrid
        columns={{md: 4, '2xl': 7}}
        gap={4}
        mt={4}  
      >
        <GridItem
         pl={1} 
         backdropFilter="blur(10px)" 
         position={'relative'} 
         colSpan={2} 
         bgColor={cardColor}
         display={'flex'}  
         rounded={20} 
         boxShadow={'sm'}
        >
          <Box position={'absolute'} w={10} h={10} bgColor={useColorModeValue('blue.100', 'blue.900')} right={5} bottom={3} borderRadius={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Icon boxSize={4} color={'blue.500'}>
              <LuBadgeSwissFranc />
            </Icon>
          </Box>
          <VStack p={4} align={'start'}>
            <Box>
              <Text fontSize="md" fontWeight="medium" lineHeight="short" fontFamily={'Onest'}>Taux de croissance des transactions</Text>
              <Text fontSize={'xs'} fontFamily={'Inter'} color={'gray.500'} lineClamp={2}  >Tansactions validées</Text>
            </Box>

            <HStack gap={2}>
              <Heading fontWeight="500" fontFamily={'Outfit'}>
                150M 
              </Heading>
              <Span float={'left'} fontSize={'sm'} alignItems={'center'} display={'flex'} gap={1} fontWeight={400} color={'gray.500'} fontFamily={'Outfit'}>
                <Box w={4} h={4}  borderRadius={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Icon boxSize={4} color={'green.500'} >
                    <LuTrendingUp />
                  </Icon>
                </Box>
                +0.5% Mois
              </Span>
            </HStack>
          </VStack>
          {/* <Flex flexDir={{md: 'row', base: 'column'}} gap={6}>
            <GrowthRateWidget value={36} /> 
          </Flex> */}

        </GridItem>

        <GridItem
         pl={1} 
         backdropFilter="blur(10px)" 
         position={'relative'}  
         rounded={20}
         bgColor={cardColor}
         boxShadow={'sm'}>

         <Box position={'absolute'} w={10} h={10} bgColor={useColorModeValue('orange.100', 'orange.900')} right={5} bottom={3} borderRadius={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Icon boxSize={4} color={'orange.500'}>
              <LuCrown />
            </Icon>
          </Box>
          <VStack align={'start'} p={4}>
            <Box>
              <Text fontSize="md" fontWeight="medium" lineHeight="short" fontFamily={'Onest'}>Remboursement</Text>
              <Text fontSize={'xs'} lineClamp={2} fontFamily={'Inter'} color={'gray.500'}>02 en cours</Text>
            </Box>
            <Text fontSize={{ base: "2", md: "xl", '2xl': "2xl" }} fontWeight="500" fontFamily={'Outfit'}> 08 </Text>
          </VStack>
        </GridItem>

        <GridItem display={'flex'} gap={2} alignItems={'center'}>
        
          <GrowthRateWidget value={75} shadowOn={true} />
          <GrowthRateWidget value={52} shadowOn={true} color={'blue'} />
          
        </GridItem>
        
      </SimpleGrid> 
      
      <SimpleGrid mt={4} columns={{md: 2}} gap={4}>
        <Box p={4} bgColor={cardColor} color={useColorModeValue('gray.950', 'white')} fontSize={"xs"} rounded={20} boxShadow={'sm'} overflow={'hidden'}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Box px={4}>
              <Text fontSize="md" fontWeight="medium" lineHeight="short" fontFamily={'Onest'}>Activitées des transactions</Text>
              <Text fontSize={'xs'} lineClamp={2} fontFamily={'Inter'} color={'gray.500'}>Ce mois</Text>
            </Box>    

            <HStack align={'center'} justify={'center'} gap={2}>
              <Text fontSize={{ base: "xl", md: "xl", '2xl': "4xl" }} fontWeight="500" fontFamily={'Outfit'} mt={2}>150 000$</Text>
              <Tag.Root size={'sm'} fontSize={'xs'} rounded={'full'} fontFamily={'Stack Sans Text'} colorPalette={"red"}>
                <Tag.Label>+5%</Tag.Label>
              </Tag.Root>
            </HStack>    
          </Flex>
          <DashboardLineChart data={chartSeries[0].data} data2={chartSeries[1].data}/>
        </Box> 
        
        <Box p={4} bgColor={cardColor} color={useColorModeValue('gray.950', 'white')} fontSize={"xs"} rounded={20} boxShadow={'sm'} overflow={'hidden'}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Box px={4}>
              <Text fontSize="md" fontWeight="medium" lineHeight="short" fontFamily={'Onest'}>Activitées des transactions</Text>
              <Text fontSize={'xs'} lineClamp={2} fontFamily={'Inter'} color={'gray.500'}>Ce mois</Text>
            </Box>    

            <HStack align={'center'} justify={'center'} gap={2}>
              <Text fontSize={{ base: "xl", md: "xl", '2xl': "4xl" }} fontWeight="500" fontFamily={'Outfit'} mt={2}>150 000$</Text>
              <Tag.Root size={'sm'} fontSize={'xs'} rounded={'full'} fontFamily={'Stack Sans Text'} colorPalette={"red"}>
                <Tag.Label>+5%</Tag.Label>
              </Tag.Root>
            </HStack>    
          </Flex>
          <DashboardLineChart data={chartSeries[0].data} data2={chartSeries[1].data}/>
        </Box>  
      </SimpleGrid>

      <SimpleGrid gap={4} columns={{md: 2, '2xl': 4}} mt={4}>
        <GridItem p={4} bgColor={cardColor} rounded={20} boxShadow={'sm'}>
          <Flex justify={'space-between'} align={'center'}>
            <Text fontSize="md" fontWeight="medium" lineHeight="short" fontFamily={'Onest'}>Tâches</Text>
            <Text fontFamily={'Outfit'}  fontSize={'xl'}>2 / 5</Text>
          </Flex>
          <Grid cursor={'pointer'} mt={4} gridTemplateColumns={'3fr 1fr'}>
            <GridItem gap={2} display={'flex'} alignItems={'center'}>
              <Box boxSize={9} bgColor={useColorModeValue('blue.50', 'blue.900')} rounded={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Icon boxSize={4} color={'blue.500'}>
                  <LuClipboardList/>
                </Icon>
              </Box>
              <Box>
                <Text fontSize={'sm'} fontFamily={'Inter'} fontWeight={400} letterSpacing={-0.1}>Creation du Dashboard</Text>
                <Text color={textGhost} fontFamily={'Inter'} fontSize={'xs'}>12.Sep 08h30</Text>
              </Box>
            </GridItem>
            <GridItem display={'flex'} justifyContent={'end'}>
              <Checkbox.Root colorPalette={'blue'} borderRadius={'full'}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem p={4} bgColor={cardColor} rounded={20} boxShadow={'sm'}>
          <Tabs.Root size={'sm'} colorPalette={'blue'} fontFamily={'Onest'} defaultValue="members">
            <Tabs.List>
              <Tabs.Trigger value="members">
                <LuUser />
                Members
              </Tabs.Trigger>
              <Tabs.Trigger value="projects">
                <LuFolder />
                Projects
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="members">
              <Text fontSize={'sm'} fontFamily={'Inter'} fontWeight={400} letterSpacing={-0.1}>Manage your team members</Text>
            </Tabs.Content>
            <Tabs.Content value="projects">
              Manage your projects
            </Tabs.Content>
          </Tabs.Root>
        </GridItem>
      </SimpleGrid> 
    </Box>
  )
}

export default Home

   
