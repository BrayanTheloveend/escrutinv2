
import {
  Box,
  Button,
  createListCollection,
  HStack,
  Icon,
  IconButton,
  Portal,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const ButtonPagination = (props) => {
  const {
    children,
    index,
    setPageIndex,
    pageIndex,
    colorPalette,
  } = props;

  return (
    <Button
      size="xs"
      rounded={'full'}
      onClick={() => {
        setPageIndex(index);
      }}
      colorPalette={colorPalette}
      variant={pageIndex === index ? "surface" : "ghost"}
    >
      {children}
    </Button>
  );
};

/**
 *
 * Paginación de datos para las tablas
 *
 * @component
 * @param {Number} pageSize Es la cantidad de items que se van a ver por página
 * @param {Function} setPageSize Setter de pageSize
 * @param {Number} pageIndex Es la indice en el cual nos encontramos dentro de la paginación de la tabla
 * @param {Function} setPageIndex Setter de pageIndex
 * @param {Number} totalItemCount Es el largo del array de datos que se va a mostrar en la tabla
 * @param {Array.Number} pageSizeOptions Son las opciones de cantidades de items que se pueden mostrar por página. - Default = [10,25,50]
 * @param {String} colorPalette - Color de estilo de la paginación - Default = "teal"
 * @param {Boolean} showOptions - Muestra las opciones - Default = true
 * @param {String} labelOptions - Etiqueta de opciones - Default = "Items mostrados"
 * @param {Boolean} showQuantity - Muestra cantidad - Default = false
 * @return {Component} Componente de paginación de tablas.
 */

const CustomPagination = (props) => {
  const {
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    totalItemsCount,
    showOptions = true,
    labelOptions = "",
    colorPalette,
    showQuantity = false,
    pageSizeOptions = []
  } = props;

  const pageSizeOption = createListCollection({ items: pageSizeOptions.map(elt=> {return {'label': elt, 'value': elt }}) }) 

  const showButtons = () => {
    let buttons = [];
    const TOTAL_INDEX = Math.ceil(totalItemsCount / pageSize);

    if (TOTAL_INDEX <= 5) {
      for (let index = 0; index < TOTAL_INDEX; index++) {
        buttons.push(
          <ButtonPagination
            colorPalette={colorPalette}
            setPageIndex={setPageIndex}
            index={index}
            pageIndex={pageIndex}
          >
            {index + 1}
          </ButtonPagination>
        );
      }
    } else {
      let start = Math.max(0, pageIndex - 2);
      let end = Math.min(TOTAL_INDEX - 1, start + 4);

      if (end === TOTAL_INDEX - 1) {
        start = Math.max(0, end - 4);
      }

      for (let index = start; index <= end; index++) {
        buttons.push(
          <ButtonPagination
            colorPalette={colorPalette}
            setPageIndex={setPageIndex}
            index={index}
            pageIndex={pageIndex}
          >
            {index + 1}
          </ButtonPagination>
        );
      }
    }

    // Si en el indice que está es mayor a cero muestra el boton para volver atrás
    buttons.unshift(
       <IconButton
       rounded={'full'}
        size={'xs'}
        onClick={() => {
          setPageIndex(pageIndex -1 < 0 ? 0 : pageIndex -1);
        }}
        disabled={!(pageIndex - 1 < TOTAL_INDEX) || pageIndex -1 < 0 }
        colorPalette={colorPalette}
        variant="gohst"
      >
        <Icon>
          <LuChevronLeft/>
        </Icon>
      </IconButton>
    );

    buttons.push(


      <IconButton
        size={'xs'}
        rounded={'full'}
        onClick={() => {
          setPageIndex(pageIndex + 1);
        }}
        disabled={!(pageIndex + 1 < TOTAL_INDEX)}
        colorPalette={colorPalette}
        variant="gohst"
      >
        <Icon>
          <LuChevronRight/>
        </Icon>
      </IconButton>
    );

    return buttons;
  };

  return (
    <>
      <HStack w="100%" p={2}>
        <HStack w="40%">
          {showOptions && (
            <>
              <Text fontSize="sm"> {labelOptions} </Text>

              <Select.Root  collection={pageSizeOption} size="sm" minWidth="60px"
                w="auto"
                onValueChange={(e) => {
                  setPageSize(e.value[0]);
                }}
              >
                <Select.HiddenSelect />
                {/* <Select.Label>Select framework</Select.Label> */}
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder= {`${pageSize}` || "3" } />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {pageSizeOption.items.map((elt, index) => (
                        <Select.Item item={elt} key={elt.value}>
                          {elt.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>

              {/* <Select
                w="auto"
                size="sm"
                variant="unstyled"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(e.target.value);
                }}
              >
                {pageSizeOption.map((opt) => (
                  <option key={opt.id} value={opt}>
                    {opt}
                  </option>
                ))}
              </Select> */}

              {showQuantity && (
                <Text fontSize="sm">Total: {totalItemsCount}</Text>
              )}
            </>
          )}
        </HStack>
        <Box flex={1} justifyContent="right" display="flex">
          <HStack>{showButtons()}</HStack>
        </Box>
      </HStack>
    </>
  );
};

export default CustomPagination;