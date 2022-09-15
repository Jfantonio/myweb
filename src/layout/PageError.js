import React from "react";
import { BsFillEmojiFrownFill } from "react-icons/bs";
const PageError = () =>{
  return(
  <div className="bg-warning  text-white text-center m-2 p-2 rounded">
      
   <p className="display-3">Sitio no encontrado <BsFillEmojiFrownFill/></p>

  </div>);
}

export default PageError;