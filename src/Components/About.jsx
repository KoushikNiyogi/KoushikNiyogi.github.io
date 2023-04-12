import React from 'react'
import { Box, Text } from '@chakra-ui/react'
const About = () => {
  return (
    <Box w={"80%"} color={'#05386B'} margin={"100px auto"} position={"relative"} id="about" className="about section">
      <Text margin={"auto"} w={"20%"} fontSize={{ base: "xl", sm: "3xl", xl: "5xl" }} mb={"5px"} fontWeight={"bolder"} padding={"5px"} borderBottom={"5px solid #05386B"}>About Me</Text>
      <Text fontSize={{ base: "md", sm: "2xl", xl: "3xl" }} textAlign={"start"} mb={"5px"} fontWeight={"semibold"} id="user-detail-intro">
        Full-Stack web developer having hands-on experience
        in web development technologies. Passionate about
        building web applications and proficient in JavaScript and
        React. Looking forward to working for the product-based
        companies.
        <br/>
        <br/>
      </Text>
    </Box>
  )
}

export default About