import { Tag, TagLabel, TagRightIcon } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { useAnime } from "../../hooks/useAnime"

export const AverageSearchScore = ({score}) => {
    const [animeInfo] = useAnime();
    return (
        <Tag 
        size='lg' 
        variant='outline' 
        colorScheme='blue'
        marginTop='2rem'>
            <TagLabel>Search average score: {animeInfo.averageScore? Number(animeInfo.averageScore).toFixed(2): 0}</TagLabel>
            <TagRightIcon as={StarIcon} />
        </Tag>
    )
}