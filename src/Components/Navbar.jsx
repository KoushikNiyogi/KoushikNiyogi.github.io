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
      position: "sticky",
      color: "#EDF5E1",
      top : "0",
      width: "100%",
      zIndex: "3",
      backgroundColor: "#379683",
}}>
  <Flex w={"80%"} margin={"auto"} alignItems={"Center"}>
    <Box w={"20%"} textAlign="start">
      <Text fontSize={{base:"2xl",xl:"4xl"}}>KN</Text>
    </Box>
    <Spacer />
    <Box w={{base:"20%",'xl':"60%"}} display={"flex"} justifyContent={"flex-end"} border={"1px solid red"}>

        <Show above='xl'>
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
          <a id="resume-link-1" href='https://drive.google.com/file/d/1sbqqthJjYmSV3q6JZ2cUa12eteaYpQ3O/view?usp=sharing' target="_blank" rel="noopener noreferrer"  className='nav-link resume'><Button bg={"#05386B"} id="resume-button-1" color={"#EDF5E1"} onClick={()=>handleClick()}>Resume</Button></a>
          </Flex>
        </Show>
        <Hide above='xl'  border={"1px solid black"}>
          <DrawerExample handleClick={handleClick}/>
        </Hide>
    
    </Box>
  </Flex>
  </div >
  )
}

export default Navbar