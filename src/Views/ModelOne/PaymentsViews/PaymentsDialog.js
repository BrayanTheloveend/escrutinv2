import { Alert, Box, Button, ButtonGroup, CloseButton, Code, createListCollection, Dialog, Field, Flex, GridItem, Heading, Icon, Image, Input, Portal, Progress, ScrollArea, Select, SimpleGrid, Span, Steps, Strong, Text, useSteps } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { LuCheck, LuClockAlert, LuCoins, LuFingerprint, LuLocate, LuPencil, LuWheat } from 'react-icons/lu'
import { useColorModeValue } from '../../../Components/ui/color-mode'

const PaymentsDialog = (props) => {



const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})
const borderColor = useColorModeValue('gray.50', 'gray.800')

const [selectedVotes, setSelectedVotes] = useState(0)
const [recap, setRecap] = useState({
    title: 'Pays',
    type: 'info',
    description: 'Cameroun'
})

const [step, setStep] = useState(0)

 useEffect(() => {
   switch (step) {
    case 0:
        setRecap({
            type: 'info',
            title: 'Pays',
            description: 'Cameroun'
        })
        break;
    case 1:
        setRecap({
            type: 'info',
            title: 'Nombres de votes',
            description: '10 Votes'
        })
        break;

    case 2:
        setRecap({
            type: 'info',
            title: 'Infos Paiement',
            description: 'Orange - 676588528'
        })
        break;

    case 3:
        setRecap({
            type: 'info',
            title: 'Infos Paiement',
            description: 'Orange - 676588528'
        })
        break;
   
    default:
        break;
   }
 }, [step])



  return (
    <Dialog.Root open={true} closeOnInteractOutside={false} placement={'center'} scrollBehavior="inside" size={{ '2xl': 'xl', md: 'lg', base: 'full'}}>
      <Dialog.Trigger asChild>
        {props.children}
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content rounded={{md: 20, base: 'none'}} minH={{md: '800px', base: 'full'}}>
            <Dialog.Header>
              <Dialog.Title  fontFamily={'Momo Trust Display'} fontSize={{'2xl': '2xl', md: 'xl', base: 'lg'}}>Votez une candidate</Dialog.Title>
            </Dialog.Header>

            {/* BEFORE PAYMENT */}

            <Dialog.Body display={'none'}>
             <Steps.Root gridTemplateColumns={'1fr'} mt={8}
                orientation={'vertical'}
                colorPalette={'blue'}
                size={{'2xl': 'xl', md: 'lg', base: 'sm'}}
                step={step}
                overflowX={'hidden'}
                onStepChange={(e) => setStep(e.step)}
                count={4}
                minH={{'2xl': '600px', base: '60vh'}}
                >
                <Steps.List>

                  {/* STEP 1 */}

                    <Steps.Item index={0}>
                        <Steps.Indicator>
                            <Steps.Status incomplete={<LuLocate/>} complete={<LuCheck />} />
                        </Steps.Indicator>


                        <Box>
                            
                            <Box maxW={{md: '300px', base: '250px'}}>
                                <Steps.Title fontFamily={'Onest'} fontSize={{'md': "lg", base: 'md'}}>Choissisez votre Pays</Steps.Title>
                                <Steps.Description fontSize={{'md': "md", base: 'xs'}} lineClamp={2}  mt={1} >Le devise sont calculez automatiquent en fonction du taux de change</Steps.Description>
                            </Box>


                            <Box mt={6} display={step !== 0 && 'none' }>
                                <Select.Root collection={frameworks} size="sm" width={{'2xl': '400px', base: "full"}}>
                                    <Select.HiddenSelect />
                                    <Select.Control>
                                        <Select.Trigger>
                                        <Select.ValueText placeholder="Choisir le pays" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                        <Select.Indicator />
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                        <Select.Content position={'relative'} zIndex={2000}>
                                            {frameworks.items.map((framework) => (
                                            <Select.Item item={framework} key={framework.value}>
                                                {framework.label}
                                                <Select.ItemIndicator />
                                            </Select.Item>
                                            ))}
                                        </Select.Content>
                                        </Select.Positioner>
                                    </Portal>
                                </Select.Root>

                            </Box>
                        </Box>
                        <Steps.Separator />
                    </Steps.Item>

                  {/* STEP 2 */}
                  
                    <Steps.Item index={1} >
                        <Steps.Indicator>
                            <Steps.Status incomplete={<LuWheat/>} complete={<LuCheck />} />
                        </Steps.Indicator>
                        <Box w={{md: '750px', base: 'full'}}>
                            <Box maxW={'300px'}>
                                <Steps.Title fontFamily={'Onest'} fontSize={{'md': "lg", base: 'md'}} >Combien de votes</Steps.Title>
                                <Steps.Description fontSize={{'md': "md", base: 'xs'}} lineClamp={2} mt={1}>Profitez des bonus de votes</Steps.Description> 
                            </Box>


                            <Box overflowX={{md: 'inherit', base: 'scroll'}} my={6} display={step !== 1 && 'none' }>
                                <ScrollArea.Root  maxW={{'2xl': "2xl", base: 'xs'}} h={'200px'}>
                                    <ScrollArea.Viewport
                                    css={{
                                        "--scroll-shadow-size": "4rem",
                                        maskImage:
                                            "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
                                        "&[data-at-top]": {
                                            maskImage:
                                            "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
                                        },
                                        "&[data-at-bottom]": {
                                            maskImage:
                                            "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
                                        },
                                        }}
                                    >
                                    <ScrollArea.Content display={'flex'} alignItems={'baseline'} gap={1} flexWrap={'wrap'} spaceY="4" textStyle="sm">
                                            
                                        {Array.from({ length: 10 }, (_, i) => i).map((_, i)=>
                                            <Box key={i} ml={1} onClick={()=>setSelectedVotes(i)} h={'70px'} w={{'2xl' :'30%', base: '45%'}} border={'1px solid'} borderColor={selectedVotes === i ? 'blue.400': borderColor} cursor={'pointer'} gap={2} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'} rounded={8} boxShadow={'sm'}>
                                                <Text fontSize={{md: 'lg', base: 'md'}} fontWeight={500} fontFamily={'Outfit'}>
                                                    {i*10} <Span fontFamily={'Onest'} fontSize={'sm'}>Votes</Span> 
                                                </Text>
                                                <Text fontSize={{md: 'md', base: 'sm'}} color={'blue.500'} fontFamily={'Outfit'}>{200*i} XAF</Text>
                                            </Box>
                                            )}

                                    </ScrollArea.Content>
                                    </ScrollArea.Viewport>
                                    <ScrollArea.Scrollbar>
                                    <ScrollArea.Thumb />
                                    </ScrollArea.Scrollbar>
                                    <ScrollArea.Corner />
                                </ScrollArea.Root>
                            </Box>
                        </Box>
                        <Steps.Separator />
                    </Steps.Item>


                  {/* STEP 3 */}
                  
                    <Steps.Item index={2} >
                        <Steps.Indicator>
                            <Steps.Status incomplete={<LuFingerprint/>} complete={<LuCheck />} />
                        </Steps.Indicator>
                        <Box w={{md: '750px', base: 'full'}}>
                            <Box maxW={'300px'}>
                                <Steps.Title fontFamily={'Onest'} fontSize={{'md': "lg", base: 'md'}} >Informations de paiement</Steps.Title>
                                <Steps.Description fontSize={{'md': "md", base: 'xs'}} lineClamp={2} mt={1}>Verifiez vos Informations</Steps.Description> 
                            </Box>


                            <Box  my={6} display={step !== 2 && 'none' }>
                                <Field.Root>
                                    <Select.Root collection={frameworks} size="sm" width={{'2xl': '400px', base: "full"}}>
                                        <Select.HiddenSelect />
                                        <Select.Control>
                                            <Select.Trigger>
                                            <Select.ValueText placeholder="Choisir l'operateur" />
                                            </Select.Trigger>
                                            <Select.IndicatorGroup>
                                            <Select.Indicator />
                                            </Select.IndicatorGroup>
                                        </Select.Control>
                                        <Portal>
                                            <Select.Positioner>
                                            <Select.Content position={'relative'} zIndex={2000}>
                                                {frameworks.items.map((framework) => (
                                                <Select.Item item={framework} key={framework.value}>
                                                    {framework.label}
                                                    <Select.ItemIndicator />
                                                </Select.Item>
                                                ))}
                                            </Select.Content>
                                            </Select.Positioner>
                                        </Portal>
                                    </Select.Root>
                                    <Field.HelperText>Champ requis pour la transaction</Field.HelperText>
                                </Field.Root>

                                <Field.Root mt={5}>
                                    <Input placeholder="Numero de Telephone" size={'sm'}  width={{'2xl': '400px', base: "full"}} />
                                    <Field.HelperText>Format attendu: Sans l'indicatif +237 - Exemple: 676XXXXXX</Field.HelperText>
                                </Field.Root>



                            </Box>
                        </Box>
                        <Steps.Separator />
                    </Steps.Item>


                    

                     {/* STEP 4 */}

                    <Steps.Item index={3} >
                        <Steps.Indicator>
                            <Steps.Status incomplete={<LuCoins/>} complete={<LuCheck />} />
                        </Steps.Indicator>
                        <Box>
                            <Box maxW={'300px'}>
                                <Steps.Title fontFamily={'Onest'} fontSize={{'md': "lg", base: 'md'}} >Validation du Paiement</Steps.Title>
                                <Steps.Description fontSize={{'md': "md", base: 'xs'}} lineClamp={2} mt={1}>Veuillez valider la transaction</Steps.Description> 
                            </Box>


                            <Box mt={4} display={step !== 3 && 'none' }>
                                
                            </Box>
                        </Box>
                        <Steps.Separator />
                    </Steps.Item>

                    
                </Steps.List>

                
                {/* COMPLETE
                <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent> */}

                {/* BUTTON */}
                
                </Steps.Root>
                    
                {/* ALERT RECAP */}

                <Alert.Root display={{md: 'inline-flex', base: 'none'}} w={'xs'} position={'absolute'} top={16} right={8} status={recap.type} variant="subtle">
                    <Alert.Indicator />
                    <Alert.Content>
                        <Alert.Title>{recap.title}</Alert.Title>
                        <Alert.Description>{recap.description}</Alert.Description>
                    </Alert.Content>
                </Alert.Root>

                <Image
                    position={'absolute'}
                    right={8}
                    bottom={{md: 20, base: 40}}
                    rounded={{md: 14, base: 6}}
                    objectFit={{md: 'inherit', base: 'contain'}}
                    src={require('../../../assets/Main/candidate.jpeg')}
                    w={{'2xl': '20%', md: '55%', base: '100px'}}
                    h={{'md': 'full', '2xl': 'inherit'}}
                        
                />

            </Dialog.Body>



            <Dialog.Body display={'none'}>
                <Flex flexDir={'column'} mt={10} gap={8} justify={'center'} align={'center'} w={'full'} h={'full'}>
                    {/* <Icon color={'orange.700'} boxSize={20} strokeWidth={'1px'}>
                        <LuClockAlert/>
                    </Icon> */}

                    <Image
                        src={require('../../../assets/Main/payment-1.png')}
                        w={'200px'}
                        animation='vibrate 0.4s linear infinite'
                    />

                    <Box textAlign={'center'} w={'500px'}>
                        <Heading fontSize={'2xl'} fontFamily={'Outfit'}>
                            Transaction en attente de validation
                        </Heading>
                        <Text mt={4}>
                            Pour finaliser votre vote, une étape de sécurité supplémentaire est nécessaire. Veuillez tapez <Strong>le code USSD</Strong>
                            &nbsp; <Code size="lg">*126#</Code> &nbsp;
                            puis saisir le code secret associé à votre compte ou à votre carte bancaire dans la fenêtre de validation ci-dessous.
                        </Text>
                    </Box>

                    <Box>
                        <Progress.Root size={'sm'} striped rounded={'full'} w="240px" value={null} colorPalette={'blue'}>
                            <Progress.Track rounded={'full'}>
                                <Progress.Range rounded={'full'} />
                            </Progress.Track>
                        </Progress.Root>
                        
                    </Box>
                </Flex>
            </Dialog.Body>

            <Dialog.Body>


            
                <Flex flexDir={'column'} mt={10} gap={8} justify={'center'} align={'center'} w={'full'} h={'full'}>
                    {/* <Icon color={'orange.700'} boxSize={20} strokeWidth={'1px'}>
                        <LuClockAlert/>
                    </Icon> */}

                    <Image
                        src={require('../../../assets/Main/payment-1.png')}
                        w={'200px'}
                        animation='vibrate 0.4s linear infinite'
                    />

                    <Box textAlign={'center'} w={'500px'}>
                        <Heading fontSize={'2xl'} fontFamily={'Outfit'}>
                            Transaction effectue avec success
                        </Heading>
                        <Text mt={4}>
                            Votre vote a ete bien pris en compte patienter pour voir l'animation 
                        </Text>
                    </Box>

                    <Box>
                        
                        
                    </Box>
                </Flex>
            </Dialog.Body>





            <Dialog.Footer flexDir={{md: 'row', base: 'column-reverse'}} w={'full'} justifyContent={'center'}>
                <Button rounded={'full'} flex={{ md : 1, base: 'inherit'}} w={'full'} onClick={()=>step - 1 < 0 ? setStep(0) : setStep(step-1)} variant="outline">Precedant</Button>
                <Button rounded={'full'} flex={{ md : 1, base: 'inherit'}} w={'full'} onClick={()=> step + 1 > 4 ? setStep(4) : setStep(step+1)}>Suivant</Button>
            </Dialog.Footer>


            <Dialog.CloseTrigger asChild>
              <CloseButton rounded={'full'} size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default PaymentsDialog