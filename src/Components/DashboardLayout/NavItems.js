import { Link as ChakraLink, HStack, Icon, Text } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import React from 'react'
import { useColorModeValue } from '../ui/color-mode';

const NavItems = ({data, isExpand}) => {

    const location = useLocation();
    const isActive = location.pathname === data.href;
    const activeBgColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <ChakraLink position={'relative'} justifyContent={isExpand ? 'center': 'left'} _hover={{bgColor: activeBgColor, color: useColorModeValue( 'gray.900','white') }} color={useColorModeValue( 'gray.600','gray.300')} animation={`${!isExpand ? 'fadeInLeft' : 'fadeInRight' } 0.5s` } py={'0.5rem'} px={4} rounded={isExpand ? 'full' : '10px'} w={!isExpand ? 'full': 10} h={!isExpand ? 'unset' : 10} _currentPage={{ 
        py: 2, px :4, mb: 1, boxShadow : '0px 0px 11px -2px rgba(124, 121, 121, 0.2)', 
       _before: {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '4px',
        bgColor: 'blue.500',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px', 
        }
       }}  asChild>
      <RouterNavLink to={data.href}>
            <HStack fontFamily={'Onest'}  letterSpacing={-0.5}>
                <Icon boxSize={5}>
                   {data.icon}
                </Icon> 
                
                {!isExpand &&
                <Text fontSize={'sm'}>
                    {data.label}
                </Text>}
            </HStack>
        </RouterNavLink>
    </ChakraLink>
  )
}

export default NavItems
