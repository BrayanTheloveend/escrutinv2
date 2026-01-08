import { Box, Flex, HStack, Icon, Select, Text } from "@chakra-ui/react";
import { LuRotateCcw, LuTrendingUp } from "react-icons/lu";

const FinancialStatCard = ({ title, amount, timePeriod, showChartLink = false }) => {
  return (
    <Box
      p={4}
      bg="white"
      borderRadius="xl"
      position={'relative'}
      boxShadow="sm"
      width="100%"
      maxW="md" // Limite la largeur sur de grands écrans
    >
      <Flex justify="space-between" align="center" >
        <Box right={2} top={2} position={'absolute'} bg="gray.100" p={2} borderRadius="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
          {/* Icône basée sur le titre pour simuler l'image */}
          <Icon  w={4} h={4} color="gray.600" >
            {title === "Total income" ? <LuRotateCcw /> : <LuRotateCcw />}
          </Icon>
        </Box>
        <Select.Root    
          size="sm"
          variant="filled"
          defaultValue={timePeriod}
          width="fit-content"
          cursor="pointer"
        >
            {/* <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option> */}
        </Select.Root> 
      </Flex>

      <Text fontSize="md" fontWeight={600} fontFamily={'Onest'} mb={1}>{title}</Text>
      <Text fontSize="xs" color="gray.500" fontFamily={'Onest'} mb={1}>{title}</Text>
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl" fontFamily={'Outfit'}>{amount}</Text>
        {showChartLink && (
          <HStack spacing={1} cursor="pointer" color="orange.500" _hover={{textDecoration: 'underline'}}>
            <Icon w={4} h={4}>
                <LuTrendingUp />
            </Icon>
            <Text fontSize="xs" fontWeight="semibold">
              View <Box as="span" display={{base: 'inline', md: 'none'}}>on chart mode</Box>
              <Box as="span" display={{base: 'none', md: 'inline'}}>on chart mode</Box>
            </Text>
          </HStack>
        )}
      </Flex>
    </Box>
  );
};

export default FinancialStatCard;