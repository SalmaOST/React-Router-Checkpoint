import React, { useState } from 'react';
import AddMovie from './Add movie';



const Button = () => {
  const [show, setShow] = useState(false)
  return (
    <>
    <button className="button" onClick={() =>setShow(true)} > Add </button>
    {show ? <AddMovie/> : null}
    
    <button className="button" onClick={() =>setShow(false)} > Close </button>
    {show ? null  : null}
    
    
    </>
);
};
export default Button ;