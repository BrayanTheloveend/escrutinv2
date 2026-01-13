import { Box, ProgressCircle, AbsoluteCenter } from "@chakra-ui/react";
import { useColorModeValue } from "../../Components/ui/color-mode";

const GrowthRateWidget = ({ value, label, color,  shadowOn }) => {
  // Définir une couleur personnalisée si 'orange.400' n'est pas assez vif dans votre thème
  // const indicatorColor = "orange.400"; 
  // const trackColor = "gray.700"; // Couleur pour la piste de fond foncée

  return (
    <Box
      borderRadius="full"
      maxW={"min-content"} // Rendre le conteneur circulaire
      maxH={"min-content"} // Rendre le conteneur circulaire
      bgColor={useColorModeValue('white', 'gray.900')}
      p={3} // Ajuster le padding au besoin
      display="flex"
      fontFamily={'Outfit'}
      justifyContent="center"
      alignItems="center"
      // boxShadow = { shadowOn && '0px 0px 11px -2px rgba(124, 121, 121, 0.2)'}
      boxShadow = { shadowOn && 'sm'}
    >
      <ProgressCircle.Root
        size={'xl'}
        colorPalette={color || "orange"}
        
        value={value} // La valeur de progression (ici 36)
      >
        <ProgressCircle.Circle css={{ "--thickness": "4px" }}>
          <ProgressCircle.Track  />
          <ProgressCircle.Range strokeLinecap="round" />
        </ProgressCircle.Circle>
         <AbsoluteCenter>
            <ProgressCircle.ValueText />
        </AbsoluteCenter>
    </ProgressCircle.Root>
  </Box>
  );
};



export default GrowthRateWidget;

