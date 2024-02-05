
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Badge,
} from '@chakra-ui/react'


export const AnimeCard = ({ anime }) => {
    const { title, image, recomendation } = anime;
    const badgeColorScheme = (recomendation) => {
        if (recomendation== "I do not recommend it.") {
            return "red"
        } else if (recomendation== "You may have fun.") {
            return "orange"
        } else if (recomendation== "Great, this is one of the best anime."){
            return "green"
        } else {
            return "white"
        }
    }
    return (
        <Card maxW='md' w={200}>
            <CardBody>
                <Image
                    src={image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    objectFit='contain'
                    h={200}
                    w="100px"
                    maxW={100}
                    bgColor='gray.200'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='sm' height='130px' overflowY='scroll'>{title}</Heading>
                    <Badge 
                    variant='outline' 
                    colorScheme={badgeColorScheme(recomendation)}
                    whiteSpace="wrap"
                    >
                    {recomendation}
                    </Badge>
                </Stack>
            </CardBody>
        </Card>
    )
}