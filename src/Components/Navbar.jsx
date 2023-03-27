import React from 'react'
import { Flex, Box, Text, Show, Hide, Center, Spacer,Button } from "@chakra-ui/react"
import { Link } from 'react-scroll'
import "./Navbar.css"
import DrawerExample from './Drawer'
const Navbar = () => {


const handleClick = ()=>{
  fetch('Koushik-Niyogi-BV-Resume.pdf').then(response => {
    response.blob().then(blob => {
       
        const fileURL = window.URL.createObjectURL(blob);
        
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Koushik-Niyogi-BV-Resume.pdf';
        alink.click();
    })
})
}


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
    <Box w={"60%"} display={"flex"} justifyContent={"flex-end"} border={"1px solid red"}>

        <Show above='md'>
          <Flex className='nav-item' alignItems={"center"} w={"100%"} border={"1px solid red"}>
          <Link activeClass="active" smooth spy to="home" className='nav-link home'>Home</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="about" className='nav-link about'>About</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="projects"  className='nav-link projects'>Projects</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="skills"  className='nav-link skills'>Skills</Link>
          <Spacer />
          <Link activeClass="active" smooth spy to="contact"  className='nav-link contact'>Contact</Link>
          <Spacer/>
          <a href='https://drive.google.com/file/d/1sbqqthJjYmSV3q6JZ2cUa12eteaYpQ3O/view?usp=sharing' target="_blank" rel="noopener noreferrer"  className='nav-link resume'><Button onClick={()=>handleClick()}>Resume</Button></a>
          </Flex>
        </Show>
        <Hide above='md' border={"1px solid black"}>
          <DrawerExample handleClick={handleClick}/>
        </Hide>
    
    </Box>
  </Flex>
    </div >
  )
}

export default Navbar