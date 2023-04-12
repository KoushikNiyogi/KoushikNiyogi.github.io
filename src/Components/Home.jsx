import { Flex,Text, Box, Image,Button  } from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'
import Images from "../photo/MyPhoto.JPG"
import Background from "./Background"
import Role from './Role'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {MdEmail,MdLocalPhone} from "react-icons/md"
const Home = () => {
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
    <Box >
      <Flex position={"relative"} direction={{ base: "column", xl: "row" }} w={"80%"} margin={"auto"} alignItems={{base: "center", xl: "none"}} justifyContent={{base: "none", xl: "space-between"}} id="home" marginTop={"75px"} >
      <Box >
        <Image
           className="home-img"
          borderRadius='full'
          boxSize={{base:"150px",sm : "300px",lg : "400px"}}
          src={Images}
          align={""}
          border={"1px solid black"} 
          alt='Dan Abramov'
        />
      </Box>
      <Flex border={"1px solid red"} direction={"column"} w={{ base: "100%", xl: "50%" }} color ={'#05386B'}  alignItems={{ base: "center", xl: "flex-start" }} marginTop={"20px"}>
        <Text fontSize={{base:"xl",sm:"3xl",xl:"5xl"}} fontWeight={"bold"} >Hi!</Text>
        <Text fontSize={{base:"xl",sm:"3xl",xl:"5xl"}} fontWeight={"bold"} id="user-detail-name">I Am Koushik Niyogi.</Text>
        <Text fontSize={{base:"xl",sm:"3xl",xl:"5xl"}} fontWeight={"bold"} id="user-detail-name"><Role/></Text>
        <Flex margin={"10px 0"} gap={"10px"}>
          <Flex><MdEmail  style={{ color: '#05386B' }} size ={'30px'}/><Text marginLeft={"10px"}  fontSize={{base:"lg",sm:"xl"}} fontWeight={"bold"}  id="contact-email">koushilniyogionlinework@gmail.com</Text></Flex>
          <Flex><MdLocalPhone  style={{ color: '#05386B' }} size ={'30px'}/><Text marginLeft={"10px"} fontSize={{base:"lg",sm:"xl"}} fontWeight={"bold"}  id="contact-phone">+919380135532</Text></Flex>
        </Flex>
        <Flex alignItems={"center"} margin={"10px 0"} gap={"10px"}>
          <Link id="contact-github" href='https://github.com/KoushikNiyogi' isExternal><FaGithub  style={{ color: '#05386B' }} size ={'40px'}/></Link>
          <Link id="contact-linkedin" href='https://www.linkedin.com/in/koushik-niyogi-4ab121239/' isExternal><FaLinkedin style={{ color: '#05386B' }} size ={'40px'}/></Link>
          <a  id="resume-link-2" href='https://drive.google.com/file/d/1sbqqthJjYmSV3q6JZ2cUa12eteaYpQ3O/view?usp=sharing' target="_blank" rel="noopener noreferrer"  className='nav-link resume'><Button id="resume-button-2" bg={"#05386B"} color={"#EDF5E1"} onClick={()=>handleClick()}>Resume</Button></a>
        </Flex>
      </Flex>

    </Flex>
    </Box>
    
  )
}

export default Home