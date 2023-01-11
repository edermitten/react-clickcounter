import React from "react";
import '../style-sheets/Button.css';

function Button({texto, buttonType, clickhandle}){
  return (
    <button className={ buttonType ? 'normal-button' : 'reset-button' } onClick={clickhandle}>
      {texto}
    </button>
  );
}

export default Button;