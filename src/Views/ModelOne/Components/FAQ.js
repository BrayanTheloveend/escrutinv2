import { Accordion, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const FAQ = () => {

    const items = [

    { value: "a", title: "Comment puis-je voter?", text: "Vous pouvez voter en accédant à votre compte et en sélectionnant votre candidat préféré. Chaque vote est sécurisé et comptabilisé automatiquement." },
    { value: "b", title: "Puis-je voter plusieurs fois?", text: "Non, chaque participant ne peut voter qu'une seule fois. Notre système vérifie votre identité pour éviter les votes multiples." },
    { value: "c", title: "Quand se termine le concours?", text: "Le concours se termine le dernier jour du mois. Les résultats seront annoncés dans les 48 heures suivant la clôture du vote." },
    { value: "d", title: "Comment les gagnants sont-ils sélectionnés?", text: "Les gagnants sont sélectionnés en fonction du nombre de votes reçus. Le candidat avec le plus de votes remporte le concours." }

    ]
  return (
    <Box px={{md: '20%', base: 4}} mt={{md: 28, base: 16}}>
        <Heading mb={14} letterSpacing={-0.5} fontFamily={'Poppins'} textAlign={'center'} fontSize={{md: '4xl', '2xl': '5xl', base: '2xl'}}>
            Foires Aux Questions
        </Heading>


        <Accordion.Root collapsible>
            {items.map((item, index) => (
                <Accordion.Item py={{md: 2, base: 1}} key={index} value={item.value}>
                <Accordion.ItemTrigger>
                    <Heading fontFamily={'Onest'} fontSize={{md: 'lg', base: 'md'}} flex="1">{item.title}</Heading>
                    <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                    <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                </Accordion.ItemContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
      
    </Box>
  )
}

export default FAQ
