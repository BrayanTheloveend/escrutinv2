import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { LuBookX, LuCalendarOff, LuCalendarSync } from 'react-icons/lu'

const DataEmpty = () => {
  return (
    <Box w={'full'} h={'full'} minH={'200px'} gap={2} display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
      {/* <Image src={require('../../assets/dashboard/assets-1.png')} w={'50%'} /> */}
      <Icon boxSize={10}>
        <LuCalendarSync strokeWidth={"1px"}/>
      </Icon>
      <Text fontSize={'sm'} fontFamily={'Outfit'}>Aucune données</Text>
    </Box>
  )
}

export default DataEmpty
