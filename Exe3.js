import { useState } from "react";
import React from 'react';

//activity 3

function Contact() 
  {
    const [click, setClick] = useState({number: "0",
    });


  return (
    <>
        <div>
          <p>
            You Clicked the button {click.number} times.
          </p>
          <button className="mx-5"
            type="button"
            onClick={() => setClick({
              number: ++click.number,
            })}
          >Click me</button>
        </div>

      </>
  )
};

export default Contact;