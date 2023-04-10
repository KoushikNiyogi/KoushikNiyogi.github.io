import { Flex,Text, Box, Image,Button  } from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'
import Images from "../photo/MyPhoto.JPG"
import Background from "./Background"
import Role from './Role'
import {FaGithub,FaLinkedin} from "react-icons/fa"
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
        <Background/>
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
      <Flex direction={"column"} alignItems={"center"} color ={'#05386B'}  textAlign={{base:"center",xl:"flex-start"}} marginTop={"20px"}>
        <Text fontSize={{base:"xl",sm:"3xl",xl:"5xl"}} fontWeight={"bold"} >Hi!</Text>
        <Text fontSize={{base:"xl",sm:"3xl",xl:"5xl"}} fontWeight={"bold"} id="user-detail-name">I Am Koushik Niyogi.</Text>
        <Text fontSize={{base:"xl",sm:"3xl",xl:"5xl"}} fontWeight={"bold"} id="user-detail-name"><Role/></Text>
        <Flex  margin={"10px 0"}>
          <Link href='https://github.com/KoushikNiyogi' isExternal><FaGithub style={{ color: '#05386B' }} size ={'30px'}/></Link>
          <Link href='https://www.linkedin.com/in/koushik-niyogi-4ab121239/' isExternal><FaLinkedin style={{ color: '#05386B' }} size ={'30px'}/></Link>
        </Flex>
        <a href='https://drive.google.com/file/d/1sbqqthJjYmSV3q6JZ2cUa12eteaYpQ3O/view?usp=sharing' target="_blank" rel="noopener noreferrer"  className='nav-link resume'><Button bg={"#05386B"} color={"#EDF5E1"} onClick={()=>handleClick()}>Resume</Button></a>
      </Flex>

    </Flex>
    </Box>
    
  )
}

export default Home