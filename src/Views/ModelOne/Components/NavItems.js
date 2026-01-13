import {  Span } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import React from 'react'

const NavItems = ({data}) => {
  return (
    <ChakraLink position={'relative'} _notFirst={{
        _before: {
            content: "''",
            position: 'absolute',
            w: 1,
            h: 1,
            rounded: 'full',
            left: -4,
            top: '48%',
            bgColor: 'gray.400'
        }}
    }  asChild>
        <RouterNavLink to={data.href}>
            <Span fontSize={'sm'} fontWeight={'medium'}>
                {data.label}
            </Span>
        </RouterNavLink>
    </ChakraLink>
  )
}

export default NavItems
