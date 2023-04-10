import React from 'react'
import Typewriter from 'typewriter-effect';
const Role = () => {
  return (
    <Typewriter
    options={{
      autoStart: true,
      loop: true,
    }}
  onInit={(typewriter) => {
    typewriter.typeString('Full Stack Web Developer')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
  )
}

export default Role