import React, { useState } from 'react'
import { useColorModeValue } from '../Components/ui/color-mode'
import { Box, Button, Checkbox, HStack, Icon, IconButton, Input, Table, Tag, Text } from '@chakra-ui/react'
import { LuDownload, LuFilter, LuPen, LuSearch } from 'react-icons/lu'
import CustomPagination from '../Components/ui/Paginator'

const Finances = () => {

    const cardColor = useColorModeValue('white', 'gray.900')
    const textGhost = useColorModeValue('gray.600', 'gray.500')


    const [tempArray, setTempArray] = useState([])
        const [pageIndex, setPageIndex] = useState(0)
        const [pageSize, setPageSize] = useState(8)
    
    
        const [fetchData, setFetchData] = useState([])
        const [selection, setSelection] = useState([])
        const [filter, setFilter] = useState([])
        const indeterminate = selection.length > 0 && selection.length < fetchData.length
    
    
        //rows for table
        const rows = tempArray.slice(pageSize * pageIndex, pageSize * (pageIndex + 1)).map((item) => (
          <Table.Row
            key={item._id}
            fontFamily={'Inter'}
            data-selected={ item.isChecked ? "" : undefined}
            >
            <Table.Cell>
              <Checkbox.Root
              size="sm"
              mt="0.5"
              aria-label="Select row"
              checked={selection.some(elt => (elt._id === item._id) && elt.isChecked)}
              onCheckedChange={(changes) => {
                  setSelection((prev) =>
                  changes.checked
                      ? [...prev, {...item, isChecked: true}]
                      : selection.filter((elt) => elt._id !== item._id),
                  )
              }}
              >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              </Checkbox.Root>
            </Table.Cell>
            <Table.Cell fontFamily={'Outfit'}>{item.phone}</Table.Cell>
            <Table.Cell fontWeight={500} fontFamily={'Onest'} textTransform={'uppercase'}>{item.transactionId}</Table.Cell>
            <Table.Cell fontFamily={'Outfit'}>${item.amount}</Table.Cell>
            <Table.Cell>{item.method}</Table.Cell>
            <Table.Cell>
              <Tag.Root size="sm">
                <Tag.Label>{item.statut}</Tag.Label>
              </Tag.Root>
            </Table.Cell>
            
          </Table.Row>
        ))

  return (
    <Box>
        <Text fontSize={{md: "2xl", '2xl': '4xl'}} fontWeight="bold" fontFamily={'Onest'}>Controle des Finances</Text>
        <Text fontSize="sm" color={textGhost}  fontFamily={'Inter'}>Toutes les Transactions ° 150</Text>


        <HStack w={'full'} mt={10}>
            <HStack w={'full'} display={{md: 'flex', base: 'none'}} spacing={3} position={'relative'}>
              <Input
              bg={cardColor}
              minW={'full'}
              fontFamily={'Onest'}
              focusBorderColor={'blue.400'}
              rounded={'0px'} 
              type="text" 
              placeholder="Rechercher une candidates" 
              />
              <Icon boxSize={4} position='absolute' right={4} color={textGhost}>
                <LuSearch/>
              </Icon>
            </HStack>

            <HStack>
              <IconButton rounded={'full'} variant={'surface'} size={'sm'}>
                <LuFilter/>
              </IconButton>
              <IconButton rounded={'full'} variant={'surface'} size={'sm'}>
                <LuDownload/>
              </IconButton>
              <Button size={'sm'} rounded={'full'} variant={'surface'}>
                Option
              </Button>
            </HStack>
          </HStack>

          <Table.Root mt={6} size={'md'} maxW={'1fr'} colorPalette={'blue'} mb={{md: 10, base: 4}}>
            <Table.Caption fontFamily={'Outfit'} pt={10} justifyContent={'end'}>
              <CustomPagination  
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                  pageIndex={pageIndex}
                  setPageIndex={setPageIndex}
                  totalItemsCount ={tempArray.length}
                  pageSizeOptions ={[3, 5, 10, 25, 50]}
              />
              </Table.Caption>
              <Table.Header fontFamily={'Inter'}>
                <Table.Row>
                  <Table.ColumnHeader w="6">
                    <Checkbox.Root
                    size="sm"
                    mt="0.5"
                    aria-label="Select all rows"
                    checked={indeterminate ? "indeterminate" : selection.length > 0}
                    onCheckedChange={(changes) => {
                        setSelection(
                        changes.checked ? tempArray.map((item) => {return {...item, isChecked: true }}) : [],
                        )
                    }}
                    >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    </Checkbox.Root>
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color={textGhost}>Télephone</Table.ColumnHeader>
                  <Table.ColumnHeader color={textGhost}>Code</Table.ColumnHeader>
                  <Table.ColumnHeader color={textGhost}>Montant</Table.ColumnHeader>
                  <Table.ColumnHeader color={textGhost}>Operateur</Table.ColumnHeader>
                  <Table.ColumnHeader color={textGhost}>Statut</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
            <Table.Body>{rows}</Table.Body>
          </Table.Root>
    </Box>
    
  )
}

export default Finances