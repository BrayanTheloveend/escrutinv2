import { Box, Text, CircularProgress, CircularProgressLabel, Progress, ProgressCircle, AbsoluteCenter } from "@chakra-ui/react";

const GrowthRateWidget = ({ value, label }) => {
  // Définir une couleur personnalisée si 'orange.400' n'est pas assez vif dans votre thème
  const indicatorColor = "orange.400"; 
  const trackColor = "gray.700"; // Couleur pour la piste de fond foncée

  return (
    <Box
      borderRadius="full" // Rendre le conteneur circulaire
      p={6} // Ajuster le padding au besoin
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="150px" // Ajuster la taille du widget
      height="150px"
    >
      <ProgressCircle.Root
        size={'xl'}
        value={value} // La valeur de progression (ici 36)
      >
        <ProgressCircle.Circle>
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

