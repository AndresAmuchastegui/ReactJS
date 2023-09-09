import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Square, Flex, Center, Text, Box } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <>

            <Flex>
                <Box p='12'>
                    <Text>Tienda Variada</Text>
                </Box>
                <Square />
                <Box p='20'>
                    <Center>
                    <Menu>
                        <MenuButton >
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Menu 1</MenuItem>
                            <MenuItem>Menu 2</MenuItem>
                        </MenuList>
                    </Menu>
                    </Center>
                </Box>
                <Square />
                <Box p='12'>
                    <Text><CartWidget /></Text>
                </Box>
            </Flex>

        </>
    )
}

export default NavBar