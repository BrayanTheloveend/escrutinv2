import React from 'react'
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useColorModeValue } from '../../../Components/ui/color-mode'



const ListHeader = ({children}) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
    mt={24}
    pos={'relative'}
    boxShadow={'lg'}
    borderTop="1px solid"
    borderColor={useColorModeValue('gray.100', 'gray.800')}
    bgGradient={'to-r'} gradientFrom={useColorModeValue('blue.200', 'blue.600')}  gradientTo={useColorModeValue('orange.200', 'orange.800')}
    fontWeight={useColorModeValue(500, 600)}
    >
      <Container as={Stack} maxW={'full'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6} align={{md: 'inherit', base:'center'}}>
            <Box>
              {/* <Image src={logo} w={{md: '150px', base: '80px'}}  />  */}
                <Heading fontFamily={'Poppins'} fontSize={'2xl'} letterSpacing={-0.9}>
                    Chalenge
                </Heading>
            </Box>
            <Text fontSize={'sm'}>© All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text textTransform={'uppercase'} fontWeight={600} fontFamily={'Onest'} fontSize={'md'}>Product</Text></ListHeader>
            <Box  as="a" href={'#'} fontSize={'sm'}>
              Overview
            </Box>
            <Box as="a" href={'#'} fontSize={'sm'}>
              Features
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text textTransform={'uppercase'} fontWeight={600} fontFamily={'Onest'} fontSize={'md'}>Company</Text></ListHeader>
            <Box as="a" href={'#'} fontSize={'sm'}>
              About
            </Box>
            <Box as="a" href={'#'} fontSize={'sm'}>
              Press
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text textTransform={'uppercase'} fontWeight={600} fontFamily={'Onest'} fontSize={'md'}>Support</Text></ListHeader>
            <Box as="a" href={'#'} fontSize={'sm'}>
              Help Center
            </Box>
            <Box as="a" href={'#'} fontSize={'sm'}>
              Terms of Service
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><Text textTransform={'uppercase'} fontWeight={600} fontFamily={'Onest'} fontSize={'md'}>Follow Us</Text></ListHeader>
            <Box as="a" href={'#'} fontSize={'sm'}>
              Facebook
            </Box>
            <Box as="a" href={'#'} fontSize={'sm'}>
              Twitter
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      {/* <Image src={fig6} w={'150px'} display={{md: 'block', base: 'none'}} opacity={0.9} zIndex={0} pos={'absolute'} bottom={0} left={0} objectFit={'contain'} />
      <Image src={fig5} w={'140px'} display={{md: 'block', base: 'none'}} zIndex={0} pos={'absolute'} bottom={0} right={0} objectFit={'contain'}/> */}
    </Box>
  )
}


