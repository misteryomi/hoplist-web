import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const Icon = (props) => {

  return (
    // <div style={{width: 20, height: 20,margin: 5}}>
        <FontAwesomeIcon  fixedWidth style={{fontSize: 12}}  {...props}/>
    // </div> 
  );
}

export default Icon;