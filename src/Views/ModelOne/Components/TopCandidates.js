import { Box, Flex, Heading, Span, Text } from '@chakra-ui/react'
import React from 'react'
import TopCandidateItems from './TopCandidateItems'

const TopCandidates = () => {

    const topCandidatesData = [
        {
            id: 1,
            nom: 'Stella Rich',
            profession: 'Actrise',
            totalVotes: 1250,
            image: 'https://i.pinimg.com/474x/7a/15/62/7a1562eb40727893ace775e4e4311760.jpg'
        },
        {
            id: 2,
            nom: 'Wilfried Smith',
            profession: 'Comedienne',
            totalVotes: 980,
            image: 'https://i.pinimg.com/originals/58/95/78/589578d8da1f4f551133cc42b5efe0ad.jpg'
        },
        {
            id: 3,
            nom: 'Marine Thon',
            profession: 'Danseuces',
            totalVotes: 750,
            image: 'https://i.pinimg.com/originals/d1/d3/a5/d1d3a57d50511e8616d8ff0130c70fca.jpg'
        }
    ]

    
    
  return (
    <Flex w={'full'} py={10} flexDir={'column'}  justify={'center'} align={'center'} gap={28} position={'relative'} overflow={'hidden'}>

        {/* svg top left */}
        <Box position={'absolute'} opacity={0.6} top={0} left={0}>
            <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.8699 93.71C31.6799 94.47 33.5199 95.11 35.3899 95.64L95.6399 35.39C95.1099 33.52 94.4699 31.68 93.7099 29.87L29.8699 93.71Z" fill="#FFC263"/>
                <path d="M22.0801 89.58C23.6201 90.59 25.2001 91.49 26.8101 92.3L92.3001 26.81C91.4901 25.19 90.5901 23.61 89.5801 22.08L22.0801 89.58Z" fill="#FFC263"/>
                <path d="M15.4099 84.31C16.7099 85.53 18.0599 86.67 19.4499 87.72L87.7199 19.45C86.6699 18.06 85.5299 16.71 84.3099 15.41L15.4099 84.31Z" fill="#FFC263"/>
                <path d="M32.9901 2.57999C26.1401 4.90999 19.7101 8.8 14.2501 14.25C8.79008 19.71 4.91008 26.14 2.58008 32.99L32.9901 2.57999Z" fill="#FFC263"/>
                <path d="M96.55 58.36C97.1 55.59 97.41 52.79 97.48 49.98L49.98 97.48C52.79 97.41 55.6 97.1 58.36 96.55L96.55 58.36Z" fill="#FFC263"/>
                <path d="M39 96.52C41.18 96.96 43.37 97.25 45.58 97.39L97.39 45.58C97.25 43.37 96.96 41.17 96.52 39L39 96.52Z" fill="#FFC263"/>
                <path d="M5.17993 70.67C5.98993 72.29 6.88993 73.87 7.89993 75.4L75.3999 7.89999C73.8599 6.88999 72.2799 5.98999 70.6699 5.17999L5.17993 70.67Z" fill="#FFC263"/>
                <path d="M0.929993 39.12C0.379993 41.89 0.07 44.69 0 47.5L47.5 0C44.69 0.07 41.88 0.379993 39.12 0.929993L0.929993 39.12Z" fill="#FFC263"/>
                <path d="M64.49 94.9C71.34 92.57 77.77 88.68 83.23 83.23C88.69 77.77 92.57 71.34 94.9 64.49L64.49 94.9Z" fill="#FFC263"/>
                <path d="M1.84009 62.08C2.37009 63.95 3.01008 65.79 3.77008 67.6L67.6101 3.76001C65.8001 3.00001 63.9601 2.35999 62.0901 1.82999L1.84009 62.08Z" fill="#FFC263"/>
                <path d="M0.0900879 51.9C0.230088 54.11 0.520083 56.31 0.960083 58.48L58.4801 0.959991C56.3001 0.519991 54.1101 0.229996 51.9001 0.0899963L0.0900879 51.9Z" fill="#FFC263"/>
                <path d="M9.76001 78.03C10.81 79.42 11.95 80.77 13.17 82.07L82.08 13.16C80.78 11.94 79.43 10.8 78.04 9.75L9.76001 78.03Z" fill="#FFC263"/>
            </svg>
        </Box>

        <Box textAlign={'center'}>
            <Heading fontSize={{md: '4xl', '2xl': '5xl'}} fontFamily={'Poppins'}>
                Le Top <Span fontFamily={'Outfit'}>#3</Span> <Span color={'blue.500'}>actuelle</Span>
            </Heading>
            <Text fontFamily={'Onest'} fontSize={{md: 'md', '2xl': 'xl'}} mt={{md: 4, '2xl': 6}}>
                Découvrez les meilleurs condidates du moment
            </Text>

        </Box>



        <Flex w={'full'} gap={8} justify={'center'} align={'center'}>

            {topCandidatesData.map((elt,index)=> <TopCandidateItems place={index === 1 && 'first'} key={index} data={elt}/>)}
        </Flex>
       
    </Flex>
  )
}

export default TopCandidates
