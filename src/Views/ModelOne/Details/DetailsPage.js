import { Accordion, Box, Breadcrumb, Button, DataList, Flex, GridItem, Heading, IconButton, Input, Link, SimpleGrid, Skeleton, Table, Tabs, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '../../../Components/ui/color-mode'
import Navbar from '../Components/Navbar'
import { LuHeart, LuSearch } from 'react-icons/lu'
const DetailsPage = ({data}) => {

    const textGhost = useColorModeValue('gray.600', 'gray.400')
      
      const items = [
    { label: "Age", value: 
      '18 Ans'
     },
    { label: "Profession", value: "Rappeur" },
      ]
  return (
    <Box>

      <Box  position={'relative'} pb={8}>
      <Navbar />
      <Box pos={'sticky'} bgColor={useColorModeValue('white', 'gray.800')}
        w={'full'}
        pb={1}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('blackAlpha.200', 'gray.700')}
        transition={'0.5s position all ease-in-out'}
        top='0' display={'flex'} justifyContent={'center'} alignItems={'center'}>
         <Flex my={1} mt={2} gap={0} justify={'left'} align={'center'} pos={'relative'} w={{md: 'xl', base:'full'}} px={{md: 'inherit', base: 4}} >
            {/* <Box >
              <Image pos={'absolute'} bgColor={'white'} src={img6} zIndex={10} top={0} left={{md: 1, base: 6}}  w={{md: '2.5em', base: '2.5em'}} />
            </Box> */}
            <Flex border={'1px solid'}   align={'center'} fontFamily={'xl'} borderColor={useColorModeValue('blackAlpha.200', 'gray.700')} position={'relative'} w={'full'}>
              <Input border={'none'}
                pl={{md: 24, base: 4}}
                fontFamily={'Inter'} 
                placeholder='Recherchez une candidate' 
                _focusVisible={{
                outlineColor: 'none',
              }}/>
              <IconButton size={'md'}   colorScheme='yellow'>
                <LuSearch/>
              </IconButton>
            </Flex>
          </Flex>   
      </Box>
      
      <Box w={'full'} px={{md: 20, '2xl': "21%", base: 4}} mt={{md: 'inherit', '2xl': 10, base: 1}}  py={4} mb={10}>
        <SimpleGrid gridTemplateColumns={{md: '2fr 1fr', base: '1fr'}} w={'full'} gap={{md: 6, base: 4}} position={'relative'}>
              <GridItem w={'full'}>
                {/* indicator  */}
                <Breadcrumb.Root fontSize={'sm'}>
                  <Breadcrumb.List>
                    <Breadcrumb.Item>
                      <Breadcrumb.Link href='/showup/Toutes les catégories'>Categories</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                      <Breadcrumb.CurrentLink noOfLines={1}>Meilleurs Chanteuses</Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                  </Breadcrumb.List>
                </Breadcrumb.Root>
                <Skeleton loading={false} mt={6} noOfLines={2} >
                  <Heading noOfLines={2} fontWeight={'medium'} mt={6} fontSize={{md: '3xl', base: '2xl'}} fontFamily={'Momo Trust Display'}>
                    Djilo Jorja
                  </Heading>
                </Skeleton>
                <Text mt={1} fontSize={'sm'}><Link>nomminé au concours </Link> Best Talent Cameroun</Text>
                <Box p={2} rounded={'md'} bgColor={useColorModeValue('blackAlpha.100', 'gray.700')} mt={4}>
                  <Text fontSize={{md: 'inherit', base: 'sm'}}>Dans la categorie:  Meilleures Chanteuse </Text>
                </Box>

                {/* Image */}

                <Box w={'full'} h={'full'} maxH={'400px'}
                bgImage={`url()`}
                >

                </Box>
                
              </GridItem>

              <GridItem top={{md: '5.4em', base: 'inherit'}} position={{md: 'sticky', base: 'inherit'}} width='full' border={'1px solid'} borderColor={'blackAlpha.200'} rounded={14}  mt={{md: 0, base: 4}} h={{md: 'max-content', base: 'full'}} >
                <Flex gap={2} align={'center'} justify={'space-between'} mb={2}>
                  <Text fontWeight={500} fontSize={'xs'} rounded={4}  w={'max-content'} p={1} bgGradient={'to-tr'} gradientFrom={useColorModeValue('blue.400', 'blue.500')}  gradientTo={useColorModeValue('orange.500', 'orange.800')}>
                    RANG <strong>#1</strong>
                  </Text>

                  <VStack 
                    gap={0} mr={2}>
                    <Text fontSize={{md: 'sm', '2xl': 'md'}} fontFamily={'Outfit'} fontWeight={600}>
                      1520
                    </Text>
                    <Text fontSize={{md: 'xs', '2xl': 'sm', base: 'sm'}}>votes</Text>
                  </VStack>

                 
                </Flex>
                
                <Text fontSize={'sm'} mt={2}> </Text>

                <Box mt={4} w={'full'}>
                  
                  <Text mt={2} color={textGhost} fontSize={'sm'} fontFamily={'Inter'}>
                    Biographie
                  </Text>
          
                  <Text mt={2} fontSize={'sm'} lineClamp={4} fontFamily={'Inter'}>
                    William Mundala, connu sous le nom de scène Tiakola, est un artiste français d'origine congolaise né le 4 décembre 1999 à Bondy. Surnommé « La Mélo » pour son talent à mêler rap et mélodies entraînantes, il s'est imposé en 2026 comme l'une des figures centrales de la scène musicale francophone.
                  </Text>

                  <Box w={'full'}>
                    <DataList.Root mt={3}  orientation="horizontal"  w={'full'}>
                      {items.map((item) => (
                        <DataList.Item key={item.label} pt="1">
                          <DataList.ItemLabel fontFamily={'Onest'}>{item.label}</DataList.ItemLabel>
                          <DataList.ItemValue fontFamily={'Inter'}>{item.value}</DataList.ItemValue>
                        </DataList.Item>
                      ))}
                    </DataList.Root>
                  </Box>
          

                  {/* <Accordion.Root>
                    <Accordion.Item>
                      
                        <Accordion.ItemTrigger>
                          <Box as='span' flex='1' textAlign='left'>
                            Couleurs (05)
                          </Box>
                          <Accordion.Icon />
                        </Accordion.Button>
                      
                      <Accordion.Panel pb={4}>
                        
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item>
                      <h2>
                        <Accordion.Button>
                          <Box as='span' flex='1' textAlign='left'>
                            Taille (01)
                          </Box>
                          <Accordion.Icon />
                        </Accordion.Button>
                      </h2>
                      <Accordion.Panel pb={4}>
                        Taille unique
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion.Root> */}

                  <Flex align={'center'} mt={4}>
                    <Text fontWeight={'bold'}>Note</Text>
                  </Flex>
                  <Text mt={2} fontSize={'sm'}>votez maintenant et obtenez un bonus de votes supplementaires.</Text>
                </Box>
                <Flex flexDir={{md: 'row', base: 'column'}} mt={8} gap={4}>
                  <Button flex={{md: 1, base: 'inherit'}} colorPalette={'pink'} rounded={'full'} variant={'surface'}>
                    <LuHeart/> Voter maintant
                  </Button>
                  <Button rounded={'full'} variant={'surface'}>
                    partager
                  </Button>
                </Flex>
              </GridItem>


              <GridItem mt={{md: 0, base: 6}}>
                  {/* <Tabs colorScheme='white'>
                    <Tabs.List>
                      <Tabs.Trigger>Attribut</Tabs.Trigger>
                    </Tabs.List>

                    
                      <Tabs.Content p={0}>
                        <Box overflowX={'auto'} maxW={'91vw'}>
                          <Skeleton loading={false}><Text mt={4} textAlign={'left'} noOfLines={ true ? 5 : 'inherit' } >{data?.description || 'aeazeaz'} </Text><Link fontSize={'sm'} color={'blue.500'} cursor={'pointer'}>{true ? 'Voir plus' : 'Voir moins'}</Link></Skeleton>
                            {/* <Table.Root mt={6} variant='simple' p={0}  >
                              <TableCaption>Caracteristique</TableCaption>
                              <Thead>
                                <Tr>
                                  <Th fontFamily={'Poppins'}>critéres</Th>
                                  <Th fontFamily={'Poppins'} isNumeric>valeur</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {isSuccess ?  info?.map((elt,index)=>
                                <Tr key={index}>
                                  <Td>{Object.keys(elt)[0]}</Td>
                                  <Td isNumeric>{Object.values(elt)[0]}</Td>
                                </Tr>) : 
                                <React.Fragment>
                                  <Tr>
                                    <Td><SkeletonText>Chargement</SkeletonText></Td>
                                    <Td><SkeletonText>Chargement</SkeletonText></Td>
                                  </Tr>
                                  <Tr>
                                    <Td><SkeletonText>Chargement</SkeletonText></Td>
                                    <Td><SkeletonText>Chargement</SkeletonText></Td>
                                  </Tr>
                                </React.Fragment>
                                }
                              </Tbody>
                            </Table.Root> 
                        </Box>
                      </Tabs.Content>
                      <Tabs.Content>
                        {/* <Comment data={fetchData?.Comment} isSuccess={isSuccess}/> 
                      </Tabs.Content> 
                      
                  </Tabs> */}

                  {/* OTHERS ARTICLE */}

                  {/* <OtherDetails dataParent={{categoryId: idCategory, isSuccess: isSuccess, id: fetchData?._id, categoryName: name}}/> */}
              </GridItem>
        </SimpleGrid>

      </Box>
    </Box>
    </Box>
  )
}

export default DetailsPage
