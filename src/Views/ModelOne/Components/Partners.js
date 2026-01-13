import { Box, Carousel, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

const Partners = () => {

    const items = Array.from({ length: 5 })
  return (
    <Box>
        <Carousel.Root autoplay slidesPerPage={4} slideCount={items.length} maxW="full" mx="auto">
            <Carousel.ItemGroup>
                {items.map((_, index) => (
                <Carousel.Item key={index} index={index}>
                    <Box w="100%">
                        <Image 
                            w={'100px'}
                            src={require('../../../assets/Main/logo.png')}
                        />
                    </Box>
                </Carousel.Item>
                ))}
            </Carousel.ItemGroup>
            <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

        </Carousel.Root>
    </Box>
  )
}

export default Partners
