import { Box, Flex, Heading, Span, Text } from '@chakra-ui/react'
import React from 'react'
import TopCandidateItems from './TopCandidateItems'
import { motion } from 'framer-motion'

const TopCandidates = () => {

    const MotionBox = motion(Box)
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
        {/* <Box position={'absolute'} opacity={0.6} top={0} left={0}>
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
        </Box> */}

        {/* SVG TOP RIGHT */}

        <Box  position={'absolute'} w={{md: '129px', '2xl': '329px'}} h={{md: '102px', '2xl': '202px'}} opacity={0.6} top={20} right={0}>
            <svg  viewBox="0 0 129 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125.38 50.25C125.94 48.91 126.42 47.54 126.82 46.15L82.0399 1.37C80.6499 1.76 79.2799 2.24 77.9399 2.81L125.38 50.25Z" fill="#DA5077"/>
                <path d="M122.31 56.05C123.06 54.91 123.73 53.73 124.33 52.53L75.6499 3.85001C74.4499 4.45001 73.2699 5.12 72.1299 5.87L122.31 56.05Z" fill="#DA5077"/>
                <path d="M118.4 61.01C119.31 60.04 120.15 59.04 120.93 58L70.1799 7.25C69.1399 8.03 68.1399 8.88 67.1699 9.78L118.4 61.01Z" fill="#DA5077"/>
                <path d="M57.6499 47.93C59.3799 53.02 62.2699 57.8 66.3299 61.86C70.3899 65.92 75.1699 68.81 80.2599 70.54L57.6499 47.93Z" fill="#DA5077"/>
                <path d="M99.1099 0.690002C97.0499 0.280002 94.9699 0.05 92.8799 0L128.19 35.31C128.14 33.22 127.91 31.14 127.5 29.08L99.1099 0.690002Z" fill="#DA5077"/>
                <path d="M127.47 43.47C127.8 41.85 128.01 40.22 128.12 38.58L89.61 0.0700073C87.97 0.180007 86.33 0.390001 84.72 0.720001L127.47 43.47Z" fill="#DA5077"/>
                <path d="M108.26 68.6C109.46 68 110.64 67.33 111.78 66.58L61.61 16.41C60.86 17.55 60.1901 18.73 59.5901 19.93L108.26 68.6Z" fill="#DA5077"/>
                <path d="M84.81 71.76C86.87 72.17 88.95 72.4 91.04 72.45L55.73 37.14C55.78 39.23 56.01 41.31 56.42 43.37L84.81 71.76Z" fill="#DA5077"/>
                <path d="M126.26 24.52C124.53 19.43 121.64 14.65 117.58 10.59C113.52 6.53 108.74 3.64 103.65 1.91L126.26 24.52Z" fill="#DA5077"/>
                <path d="M101.88 71.09C103.27 70.7 104.64 70.22 105.98 69.65L58.53 22.2C57.97 23.54 57.4901 24.91 57.0901 26.3L101.88 71.09Z" fill="#DA5077"/>
                <path d="M94.3101 72.39C95.9501 72.28 97.5901 72.07 99.2001 71.74L56.4401 28.98C56.1101 30.6 55.9 32.23 55.79 33.87L94.3101 72.39Z" fill="#DA5077"/>
                <path d="M113.73 65.2C114.77 64.42 115.77 63.57 116.74 62.67L65.52 11.45C64.61 12.42 63.77 13.42 62.99 14.46L113.73 65.2Z" fill="#DA5077"/>
                <path d="M36.38 56.77L31.9299 52.32L36.38 47.87C36.94 47.31 36.94 46.39 36.38 45.83C35.82 45.27 34.9 45.27 34.34 45.83L29.89 50.28L25.44 45.83C24.88 45.27 23.96 45.27 23.4 45.83C22.84 46.39 22.84 47.31 23.4 47.87L27.8499 52.32L23.4 56.77C22.84 57.33 22.84 58.25 23.4 58.81C23.96 59.37 24.88 59.37 25.44 58.81L29.89 54.36L34.34 58.81C34.9 59.37 35.82 59.37 36.38 58.81C36.95 58.25 36.95 57.34 36.38 56.77Z" fill="#FFC263"/>
                <path d="M72.04 96.44C72.04 99.41 69.64 101.81 66.67 101.81C63.7 101.81 61.3 99.41 61.3 96.44C61.3 93.47 63.7 91.07 66.67 91.07C69.64 91.07 72.04 93.47 72.04 96.44Z" fill="#FFC263"/>
                <path d="M16.3401 87.58L27.1 98.34V76.82L16.3401 87.58Z" fill="#244579"/>
                <path d="M0 87.58L10.76 98.34V76.82L0 87.58Z" fill="#244579"/>
            </svg>

        </Box>

        {/* CIRCLE VECTOR */}

        <MotionBox
            position={'absolute'}
            visibility={{ md: 'visible', base: 'hidden' }}
            top="200px"
            left="44px"
            zIndex={-1}
            opacity={0.7}
            pointerEvents="none"
            w={{ base: "180px", md: "120px", "2xl": "220px" }}
            h={{ base: "180px", md: "120px", "2xl": "220px" }}
            borderRadius="full"
            //bgGradient="radial(circle at 30% 30%, rgba(107,70,193,0.95), rgba(99,102,241,0.28))"
            bgColor={'blue.400'}
            //{...colors.PrimaryDegrade}
            filter="blur(8px)"
            initial={{ scale: 0.92, opacity: 0.7, rotate: -6 }}
            animate={{ scale: 1.10, opacity: 0.95, rotate: 6 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

        <MotionBox
            position={'absolute'}
            top="100px"
            left="68px"
             opacity={0.7}
            visibility={{ md: 'visible', base: 'hidden' }}
            zIndex={-2}
            pointerEvents="none"
            w={{ base: "200px", md: "160px", "2xl": "360px" }}
            h={{ base: "200px", md: "160px", "2xl": "360px" }}
            borderRadius="full"
            bgGradient="radial(circle at 30% 30%, rgba(121, 121, 121, 0.95), rgba(98, 98, 98, 0.25))"
            bgColor={'orange.400'}
            // {...colors.PrimaryDegrade}
            filter="blur(8px)"
            initial={{ scale: 1.05, opacity: 0.6, rotate: 8 }}
            animate={{ scale: 0.86, opacity: 0.9, rotate: -8 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />

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
