import { Heading, Text } from "@chakra-ui/react"

export const PageHeader = () => {
    return (
        <>
            <Heading as='h1' size='4xl'>
                Busca un anime
            </Heading>
            <Text
                marginBottom='3rem'
                fontSize='2xl'
            >アニメを探してください</Text>
        </>
    );
};