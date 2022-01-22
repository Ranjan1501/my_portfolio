import React from "react";
import Particles from "react-particles-js";
import part from "./particle.json"

function Demo(){


   return(
      <>
      <Particles height = {"700px"} params = {part} />
      </>
   )
}

export {Demo}