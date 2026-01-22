import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CandidateItems from '../Components/CandidateItems'

const OtherCandidates = () => {


    const otherCandidatesData = [
        {
            id: 4,
            nom: 'Sophia Laurent',
            profession: 'Chanteuse',
            totalVotes: 1520,
            image: 'https://i.pinimg.com/236x/2b/8d/3c/2b8d3c3d1b85ad94dde7df21fc88b41e.jpg'
        },
        {
            id: 5,
            nom: 'Jessica Brown',
            profession: 'Productrice',
            totalVotes: 890,
            image: 'https://i.pinimg.com/originals/b1/78/fc/b178fc7be5d6737b7b07f55bc3503915.jpg'
        },
        {
            id: 6,
            nom: 'Clara Dumont',
            profession: 'Réalisatrice',
            totalVotes: 1105,
            image: 'https://i.pinimg.com/736x/4b/6b/7d/4b6b7d3babf33ed36b223c403de225c5.jpg'
        },
        {
            id: 7,
            nom: 'Djilo Jorda',
            profession: 'mon crush',
            totalVotes: 1105,
            image: 'https://i.pinimg.com/736x/36/a5/cd/36a5cd91f5f02048c4e05e1708c2f8fb.jpg'
        }
    ]

  return (
    <SimpleGrid columns={{'2xl' : 3, md: 2, base: 1}} mt={20} gap={3}>
        {
            otherCandidatesData.map((elt, index)=> <CandidateItems resized={true} key={index} data={elt} />)
        }
    </SimpleGrid>
  )
}

export default OtherCandidates