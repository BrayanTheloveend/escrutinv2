import { Box, Button, Checkbox, Field, Grid, GridItem, Heading, Icon, IconButton, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorMode, useColorModeValue } from '../../Components/ui/color-mode'
import { LuCrown, LuMoon, LuSun } from 'react-icons/lu'

const Login = () => {
    const cardColor = useColorModeValue('white', 'gray.900')
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Grid bgColor={useColorModeValue('#efefef', 'gray.950')} gridTemplateColumns={'1fr 1fr'} gap={6} w={'100vw'} h={'100vh'} p={10} px={'10%'}>
        <GridItem p={8} pt={14} px={'20%'} display={'flex'} flexDir={'column'}>
            {/* <Icon boxSize={14} >
                <LuCrown/>
            </Icon> */}
            <Heading mt={8} fontFamily={'Poppins'} letterSpacing={-0.8} fontSize={'3xl'}> Sing In</Heading>
            <Field.Root mt={6}>
                <Field.Label fontFamily={'Outfit'}>email</Field.Label>
                <Input bgColor={useColorModeValue('white', 'gray.950')} placeholder="me@example.com" />
            </Field.Root>

            <Field.Root mt={6}>
                <Field.Label fontFamily={'Outfit'}>password</Field.Label>
                <Input bgColor={useColorModeValue('white', 'gray.950')} type='password' placeholder="* * * * " />
            </Field.Root>

            <Checkbox.Root mt={6}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
            </Checkbox.Root>

            <Button mt={8}>
                Sign In
            </Button>
        </GridItem>
        <GridItem flexDir={'column'}  display={'flex'} justifyContent={'space-between'} p={8} pt={14} gap={8} boxShadow={'lg'} bgColor={cardColor} rounded={40} >
            <Icon boxSize={14}>
                <LuCrown/>
            </Icon>
            <Box >
                <Text fontSize={'2xl'} fontFamily={'Momo Trust Display'}>
                    Wellcome
                </Text>
                <Text mt={2} fontSize={'sm'}>
                    "L’élégance est la seule beauté qui ne se fane jamais."
                    Connectez-vous pour accéder à votre espace personnel, suivre les étapes de la compétition et révéler votre potentiel au monde. L’aventure vers la couronne commence ici.
                </Text>
            </Box>

            <Box position={'relative'} w={'full'} >
                <IconButton onClick={toggleColorMode} position={'absolute'} zIndex={100} right={4} top={2} rounded={'full'}>
                    <Icon boxSize={4}>
                        {colorMode === 'light' ? <LuMoon/> : <LuSun/>}
                    </Icon>
                </IconButton>
                <Box className='inverted-radius' bg={useColorModeValue('#efefef', 'gray.800')} p={4} px={5} h={'180px'}  w={'full'} backdropFilter="blur(8px)">
                    <Heading fontFamily={'Lobster Two'} bgClip={'text'} bgGradient={'to-tr'} gradientFrom={'blue.500'} gradientVia={'purple.400'} gradientTo={'pink.500'}>Sponsorisé par :</Heading>
                </Box>
            </Box>
        </GridItem>
    </Grid>
  )
}

export default Login
