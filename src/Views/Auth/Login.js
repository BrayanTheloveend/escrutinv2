import { Box, Button, Checkbox, Field, Flex, Grid, GridItem, Heading, Icon, IconButton, Input, Span, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorMode, useColorModeValue } from '../../Components/ui/color-mode'
import { LuCrown, LuMoon, LuSun } from 'react-icons/lu'

const Login = () => {
    const cardColor = useColorModeValue('white', 'gray.900')
    const { colorMode, toggleColorMode } = useColorMode()
    let isIOSDevice = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on 
    const vectorColorPrimary = "#fda311"
    const vectorColorSecondary = '#1ea1f8'

  return (
    <Grid gridTemplateColumns={'1fr 1fr'} gap={6} w={'100vw'} h={'100vh'} p={10} px={'10%'}>
        <GridItem p={8} pt={14} pl={'55%'} display={'flex'} justifyContent={'center'} flexDir={'column'}>
            {/* <Icon boxSize={14} >
                <LuCrown/>
            </Icon> */}
            
                <Box 
                bgColor={cardColor} 
                // bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                // backdropFilter="blur(10px)"
                p={6} 
                py={10} 
                rounded={28} 
                boxShadow={'lg'}>
                    <Heading textAlign={'center'} fontWeight={700} fontFamily={'Onest'} letterSpacing={-0.8} fontSize={'3xl'}>Connexion</Heading>
                    <Text mt={2} textAlign={'center'} fontFamily={'Onest'} fontSize={'sm'}>Saisissez vos informations pour vous connecter</Text>
                    <Field.Root mt={8}>
                        <Field.Label fontFamily={'Onest'}>Courriel</Field.Label>
                        <Input bgColor={useColorModeValue('white', 'gray.950')} placeholder="me@example.com" />
                    </Field.Root>

                    <Field.Root mt={6}>
                        <Field.Label fontFamily={'Onest'}>password</Field.Label>
                        <Input bgColor={useColorModeValue('white', 'gray.950')} type='password' placeholder="* * * * " />
                    </Field.Root>

                    <Checkbox.Root mt={6}>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label fontFamily={'Onest'}>Accept terms and conditions</Checkbox.Label>
                    </Checkbox.Root>
                    <br/>
                    <Button bgGradient={'to-l'} gradientFrom={useColorModeValue('blue.400', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.800')} fontFamily={'Momo Trust Display'} variant={useColorModeValue('solid', 'surface')} fontWeight={ isIOSDevice && 'medium'} size={'lg'} w={'full'} mt={8} rounded={'full'}>
                        Se connecter
                    </Button>
                </Box>
            
        </GridItem>
        <GridItem placeItems={'left'} flexDir={'column'}  display={'flex'} justifyContent={'space-between'} p={8} pt={14} gap={8} boxShadow={'lg'} 
        // bgColor={cardColor} 
        rounded={40} 
        position={'relative'}
        bgImage={`url(https://cdn.pixabay.com/photo/2024/06/27/15/47/afro-8857605_1280.jpg)`}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        _before={{
          position: 'absolute',
          zIndex: 10,
          content: "''",
          bgGradient: 'to-tr', 
          gradientFrom: useColorModeValue('blue.400', 'blue.500'),
          gradientTo: useColorModeValue('orange.500', 'orange.800'),
          opacity: .6,
          //bgColor: 'yellow.500',
          w: 'full',
          h: 'full',
          rounded: 40,
          top: 0,
          left: 0
        }}
        >
            <Box 
            display={'flex'}
            justifyContent={'space-between'}
            flexDir={'column'} alignItems={'center'}
            w={'full'} h={'full'}
            // bgImage={`url${require('')}`}
            >
                {/* <Icon boxSize={14}>
                    <LuCrown/>
                </Icon>*/}

                
                <Box position={'relative'} justifyContent={'center'} gap={8} alignItems={'center'} display={'flex'} zIndex={12} >

                   <Flex 
                   mt={20}
                    transition={'all ease-in-out 0.2s'}
                    w={'max-content'}
                    h={'max-content'}
                    p={2} rounded={'full'} bgGradient={'to-tr'} gradientFrom={useColorModeValue('blue.500', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.600')} color={useColorModeValue('gray.800', 'white')} >
                        <Box bgColor={cardColor} position={'relative'} zIndex={12} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} w={40} h={40} rounded={'full'}>

                        </Box> 
                    </Flex>


                    <Heading position={'relative'} _before= {{
                        content: "''",
                        position: 'absolute',
                        w: {md: '22%', base: '20%'},
                        h: '2px',
                        rounded: 'full',
                        bottom: {md: -10, base: -4},
                        bgColor: useColorModeValue('gray.700','gray.100')
                        }}
                        fontSize={{md: '7xl', '2xl': '8xl', base: '4xl'}} fontWeight={ isIOSDevice && 'medium'} color={useColorModeValue('gray.800', 'white')} lineHeight={1.1} fontFamily={'Momo Trust Display'} mt={{md: 8, '2xl': 20, base: 10}}>
                        Best Talent Cameroun
        
                        <Span position={'absolute'} top={{md: -8, base: -6}} right={{md: 'inherit', base: 2}} fontFamily={'Parisienne'} textAlign={'right'} fontSize={{md: '2xl', '2xl': '4xl', base: 'xl'}}>
                            édition 6
                        </Span>
                    </Heading>
                </Box>

                

                <Box position={'relative'} w={'full'} >
                    <IconButton onClick={toggleColorMode} position={'absolute'} zIndex={100} right={4} top={2} rounded={'full'}>
                        <Icon boxSize={4}>
                            {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
                        </Icon>
                    </IconButton>
                    <Box className='inverted-radius'
                        bg="rgba(255, 255, 255, 0.15)" // Couleur de fond blanche avec transparence (entre 0.1 et 0.3 fonctionne bien)
                        backdropFilter="blur(10px)"    // L'effet de flou sur l'arrière-plan de cet élément
                        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Une ombre subtile pour un effet 3D
                        // border="1px solid rgba(255, 255, 255, 0.3)" 
                        //bg={useColorModeValue('#efefef', 'gray.800')} 
                        p={4} px={5} h={'180px'}  w={'full'}
                        color={'white'} zIndex={25} position={'relative'}
                    >
                        <Heading fontFamily={'Lobster Two'} >Sponsorisé par :</Heading>
                    </Box>
                </Box>
            </Box>
        </GridItem>





        {/* TOP LEFT */}

        <Box position={'absolute'} display={'none'} opacity={0.6} bottom={60} left={0}>
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



        {/* SVG TOP RIGHT */}

        <Box  position={'absolute'} display={'none'} w={{md: '129px', '2xl': '329px'}} h={{md: '102px', '2xl': '202px'}} opacity={0.6} bottom={20} left={0}>
            <svg  viewBox="0 0 129 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125.38 50.25C125.94 48.91 126.42 47.54 126.82 46.15L82.0399 1.37C80.6499 1.76 79.2799 2.24 77.9399 2.81L125.38 50.25Z" fill="#509adaff"/>
                <path d="M122.31 56.05C123.06 54.91 123.73 53.73 124.33 52.53L75.6499 3.85001C74.4499 4.45001 73.2699 5.12 72.1299 5.87L122.31 56.05Z" fill="#509adaff"/>
                <path d="M118.4 61.01C119.31 60.04 120.15 59.04 120.93 58L70.1799 7.25C69.1399 8.03 68.1399 8.88 67.1699 9.78L118.4 61.01Z" fill="#509adaff"/>
                <path d="M57.6499 47.93C59.3799 53.02 62.2699 57.8 66.3299 61.86C70.3899 65.92 75.1699 68.81 80.2599 70.54L57.6499 47.93Z" fill="#509adaff"/>
                <path d="M99.1099 0.690002C97.0499 0.280002 94.9699 0.05 92.8799 0L128.19 35.31C128.14 33.22 127.91 31.14 127.5 29.08L99.1099 0.690002Z" fill="#509adaff"/>
                <path d="M127.47 43.47C127.8 41.85 128.01 40.22 128.12 38.58L89.61 0.0700073C87.97 0.180007 86.33 0.390001 84.72 0.720001L127.47 43.47Z" fill="#509adaff"/>
                <path d="M108.26 68.6C109.46 68 110.64 67.33 111.78 66.58L61.61 16.41C60.86 17.55 60.1901 18.73 59.5901 19.93L108.26 68.6Z" fill="#509adaff"/>
                <path d="M84.81 71.76C86.87 72.17 88.95 72.4 91.04 72.45L55.73 37.14C55.78 39.23 56.01 41.31 56.42 43.37L84.81 71.76Z" fill="#509adaff"/>
                <path d="M126.26 24.52C124.53 19.43 121.64 14.65 117.58 10.59C113.52 6.53 108.74 3.64 103.65 1.91L126.26 24.52Z" fill="#509adaff"/>
                <path d="M101.88 71.09C103.27 70.7 104.64 70.22 105.98 69.65L58.53 22.2C57.97 23.54 57.4901 24.91 57.0901 26.3L101.88 71.09Z" fill="#509adaff"/>
                <path d="M94.3101 72.39C95.9501 72.28 97.5901 72.07 99.2001 71.74L56.4401 28.98C56.1101 30.6 55.9 32.23 55.79 33.87L94.3101 72.39Z" fill="#509adaff"/>
                <path d="M113.73 65.2C114.77 64.42 115.77 63.57 116.74 62.67L65.52 11.45C64.61 12.42 63.77 13.42 62.99 14.46L113.73 65.2Z" fill="#509adaff"/>
                <path d="M36.38 56.77L31.9299 52.32L36.38 47.87C36.94 47.31 36.94 46.39 36.38 45.83C35.82 45.27 34.9 45.27 34.34 45.83L29.89 50.28L25.44 45.83C24.88 45.27 23.96 45.27 23.4 45.83C22.84 46.39 22.84 47.31 23.4 47.87L27.8499 52.32L23.4 56.77C22.84 57.33 22.84 58.25 23.4 58.81C23.96 59.37 24.88 59.37 25.44 58.81L29.89 54.36L34.34 58.81C34.9 59.37 35.82 59.37 36.38 58.81C36.95 58.25 36.95 57.34 36.38 56.77Z" fill="#FFC263"/>
                <path d="M72.04 96.44C72.04 99.41 69.64 101.81 66.67 101.81C63.7 101.81 61.3 99.41 61.3 96.44C61.3 93.47 63.7 91.07 66.67 91.07C69.64 91.07 72.04 93.47 72.04 96.44Z" fill="#FFC263"/>
                <path d="M16.3401 87.58L27.1 98.34V76.82L16.3401 87.58Z" fill="#244579"/>
                <path d="M0 87.58L10.76 98.34V76.82L0 87.58Z" fill="#244579"/>
            </svg>

        </Box> 



        <Box position={'absolute'} w={'700px'} opacity={0.6} bottom={0} left={0}>
            <svg  viewBox="0 0 554 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-15.6727 35.355L-172.649 192.331L-15.6727 349.307L141.303 192.331L-15.6727 35.355Z" stroke={vectorColorSecondary} stroke-width="50" stroke-miterlimit="10"/>
                <path d="M375.321 251.177L218.345 408.153L375.321 565.129L532.298 408.153L375.321 251.177Z" stroke={vectorColorSecondary} stroke-width="30" stroke-miterlimit="10"/>
                <path d="M80.03 206.671C94.94 221.581 94.94 245.761 80.03 260.681L-86.13 426.841C-101.04 441.751 -125.22 441.751 -140.14 426.841C-155.05 411.931 -155.05 387.751 -140.14 372.831L26.02 206.671C40.94 191.761 65.12 191.761 80.03 206.671Z" fill="url(#paint0_linear_0_1)"/>
                <path d="M254.25 191.471C270.46 207.681 270.46 233.951 254.25 250.161L82.96 421.441C66.75 437.651 40.48 437.651 24.27 421.441C8.06005 405.231 8.06005 378.961 24.27 362.751L195.55 191.471C211.76 175.261 238.04 175.261 254.25 191.471Z" fill="url(#paint1_linear_0_1)"/>
                <path d="M248.02 304.231C255.74 311.951 255.74 324.461 248.02 332.171L170.38 409.811C162.66 417.531 150.15 417.531 142.44 409.811C134.72 402.091 134.72 389.581 142.44 381.871L220.08 304.231C227.8 296.521 240.31 296.521 248.02 304.231Z" fill="url(#paint2_linear_0_1)"/>
                <path d="M184.37 262.681C194.69 273.011 194.69 289.751 184.37 300.071L30.0799 454.361C19.7499 464.691 3.00995 464.691 -7.31005 454.361C-17.63 444.031 -17.63 427.291 -7.31005 416.971L146.98 262.681C157.3 252.351 174.04 252.351 184.37 262.681Z" fill="url(#paint3_linear_0_1)"/>
                <path d="M444.28 227.482C444.28 229.732 442.45 231.562 440.2 231.562C437.95 231.562 436.12 229.732 436.12 227.482C436.12 225.232 437.95 223.402 440.2 223.402C442.45 223.402 444.28 225.232 444.28 227.482Z" stroke={vectorColorPrimary} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M29.9398 158.841C29.9398 161.091 28.1098 162.921 25.8598 162.921C23.6098 162.921 21.7798 161.091 21.7798 158.841C21.7798 156.591 23.6098 154.761 25.8598 154.761C28.1198 154.761 29.9398 156.591 29.9398 158.841Z" stroke={vectorColorSecondary} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M274.4 138.702L279.95 129.091H268.85L274.4 138.702Z" stroke={vectorColorSecondary} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M265.78 284.291C268.2 281.871 272.44 286.111 274.86 283.691C277.28 281.271 273.04 277.031 275.46 274.611C277.88 272.191 282.12 276.431 284.54 274.011C286.96 271.591 282.72 267.351 285.13 264.931C287.55 262.511 291.79 266.751 294.21 264.331C296.63 261.911 292.39 257.671 294.81 255.241C297.23 252.821 301.47 257.061 303.9 254.641" stroke={vectorColorPrimary} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_0_1" x1="80.035" y1="206.674" x2="-140.134" y2="426.844" gradientUnits="userSpaceOnUse">
                <stop stop-color={vectorColorPrimary}/>
                <stop offset="1" stop-color={vectorColorSecondary} stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="254.245" y1="191.469" x2="24.2736" y2="421.44" gradientUnits="userSpaceOnUse">
                <stop stop-color={vectorColorPrimary}/>
                <stop offset="1" stop-opacity="0" stop-color={vectorColorSecondary}/>
                </linearGradient>
                <linearGradient id="paint2_linear_0_1" x1="248.023" y1="304.234" x2="142.437" y2="409.82" gradientUnits="userSpaceOnUse">
                <stop stop-color={vectorColorPrimary}/>
                <stop offset="1" stop-opacity="0" stop-color={vectorColorSecondary}/>
                </linearGradient>
                <linearGradient id="paint3_linear_0_1" x1="197.092" y1="249.959" x2="110.871" y2="336.18" gradientUnits="userSpaceOnUse">
                <stop stop-color={vectorColorPrimary}/>
                <stop offset="1" stop-opacity="0" stop-color={vectorColorSecondary}/>
                </linearGradient>
                </defs>
            </svg>


        </Box>


    </Grid>
  )
}

export default Login
