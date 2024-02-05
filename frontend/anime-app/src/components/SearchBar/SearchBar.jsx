import { Input, InputGroup, InputRightElement, Button, Icon } from '@chakra-ui/react'
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons'

export const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)

    return (
        <InputGroup size='md'>
            <Input
                value={value}
                pr='4.5rem'
                type='text'
                placeholder='Busca un anime'
                onChange={handleChange}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={()=>{onSearch(value)}}>
                    <Icon as={Search2Icon}/>
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}