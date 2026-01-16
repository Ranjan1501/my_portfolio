import React from "react";
import Particles from "react-particles";
import part from "./particle.json";

function Demo() {
  return (
    <>
      <Particles id="tsparticles" options={part} height="700px" />
    </>
  );
}

export { Demo };
