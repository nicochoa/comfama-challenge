import { Highlight , Heading } from "@chakra-ui/react";

export const ErrorMessage = () => {
    return (
        <Heading lineHeight='tall' marginTop='3rem' size='md'>
            <Highlight query='Ocurrio un error' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
                Ocurrio un error
            </Highlight>
        </Heading>
    );
};