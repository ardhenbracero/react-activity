//activity 1

import React from 'react';

function Exe1(){
  function buttonClick(){
    alert('Ive been clicked');
  }

  return (
    <>
    <div>
      <button onClick={buttonClick}>
        Click me
      </button>
    </div>
    </>
  );
}

export default Exe1;