import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Spacer,
    Flex,
    Button,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-scroll'
const DrawerExample = ({handleClick}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>

            <IconButton
                ref={btnRef}
                onClick={onOpen}
                variant='outline'
                colorScheme='teal'
                aria-label='Send email'
                icon={<GiHamburgerMenu />}
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Flex className='nav-item' alignItems={"center"} border={"1px solid red"}>
                        <Link activeClass="active" smooth spy to="home" className='nav-link home'>Home</Link>
                        <Spacer />
                        <Link activeClass="active" smooth spy to="about" className='nav-link about'>About</Link>
                        <Spacer />
                        <Link activeClass="active" smooth spy to="projects" className='nav-link projects'>Projects</Link>
                        <Spacer />
                        <Link activeClass="active" smooth spy to="skills" className='nav-link skills'>Skills</Link>
                        <Spacer />
                        <Link activeClass="active" smooth spy to="contact" className='nav-link contact'>Contact</Link>
                        <Spacer />
                        <a href='https://drive.google.com/file/d/1sbqqthJjYmSV3q6JZ2cUa12eteaYpQ3O/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='nav-link resume'><Button onClick={() => handleClick()}>Resume</Button></a>
                    </Flex>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerExample