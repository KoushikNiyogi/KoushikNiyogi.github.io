import React from 'react'
import { Flex, Box, Text, Show, Hide, Center, Spacer,Button } from "@chakra-ui/react"
import { Link } from 'react-scroll'
import {GiHamburgerMenu} from "react-icons/gi"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div id="nav-menu" style={{
      overflow: "hidden",
      position: "fixed",
      backgroundColor : "White",
      top : "0",
      width: "100%",
      zIndex: "3",
      padding : "10px 50px"
}}>
  <Flex alignItems={"Center"}>
    <Box w={"20%"} textAlign="start">
      <Text fontSize='4xl'>KN</Text>
    </Box>
    <Spacer />
    <Box w={"60%"} >
      <>
        <Show above='md' >
          <Flex className='nav-item' alignItems={"center"} border={"1px solid red"}>
          <Link activeClass="active" smooth spy to="home">Home</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="about">About</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="projects">Projects</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="skills">Skills</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="contact">Contact</Link>
          <Spacer/>
          <a href='https://drive.google.com/file/d/1sbqqthJjYmSV3q6JZ2cUa12eteaYpQ3O/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
          </Flex>
        </Show>
        <Hide above='md'>
          <GiHamburgerMenu/>
        </Hide>
      </>
    </Box>
  </Flex>
    </div >
  )
}

export default Navbar