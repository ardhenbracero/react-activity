import React from 'react';
  //activity 2

function exe2() {

  function button1() {
    alert('You Clicked Button 1');
  }
  function button2() {
    alert('You Clicked Button 2');
  }
  function button3() {
    alert('You Clicked Button 2');
  }
  
  return (
    <>
    <div>
    <button onClick={button1}>
      Button1
    </button>
    <button onClick={button2}>
      Button2
    </button>
    <button onClick={button3}>
      Button3
    </button>
    </div>
    
    </>
    
  );
}


export default exe2;