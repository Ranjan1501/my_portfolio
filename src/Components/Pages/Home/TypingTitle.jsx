import React from "react";
import Typewriter from "typewriter-effect";

const TypingTitle = () => {
  return (
    <>
      <div className="sub" style={{ color: "#F6F6F6" }}>
        <Typewriter
          options={{
            strings: ["Software Engineer II", "Backend Developer"],
            autoStart: true,
            loop: true,
            delay: 45,
          }}
        />
      </div>
    </>
  );
};

export { TypingTitle };
