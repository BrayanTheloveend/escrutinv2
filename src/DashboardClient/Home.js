import { Box, Flex, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { LuCalendarSearch, LuTimer } from 'react-icons/lu'
import OverviewCard from './HomeComponents/OverviewCard'
import FinancialStatCard from './HomeComponents/FinancialStatCard'
import GrowthRateWidget from './HomeComponents/Meter'
import DashboardLineChart from './HomeComponents/Charts/DashboardLineChart'

const Home = () => {

  const overviewData = [
    {
      title: "Total de votes",
      subtitles: "Mensuel",
      value: "83%",
      icon: <LuTimer />,
      gradient: ['rgba(255, 180, 200, 0.7)', 'rgba(255, 200, 150, 0.7)', 'rgba(150, 180, 255, 0.7)']
    },
    {
      title: "Nouveaux utilisateurs",
      subtitles: "Cette semaine",
      value: "1,245",
      icon: <LuCalendarSearch />,
      gradient: ['rgba(150, 255, 200, 0.7)', 'rgba(150, 200, 255, 0.7)', 'rgba(255, 150, 200, 0.7)']
    },
    
    // Vous pouvez ajouter plus de cartes ici
  ];
  return (

    <Box>
      <Text fontSize="lg" fontWeight="bold" fontFamily={'Onest'}>Overview</Text>
      <Flex mt={4} gap={6} flexWrap={'wrap'}>
        {overviewData.map((data, index) => (
          <OverviewCard
            key={index}
            title={data.title}
            subtitles={data.subtitles}
            value={data.value}
            icon={data.icon}
            gradient={data.gradient}
          />
        ))}

        <VStack>
          <GrowthRateWidget value={36} />
        </VStack>
      </Flex>
      
    </Box>
  )
}

export default Home

   
