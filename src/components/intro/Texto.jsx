import {useState} from "react";
import { TextoH2 } from "./TextH2";
export const Texto = () => {
    const [show, setShow] = useState(true);
    const handleShow = () =>{
        setShow(!show);
    }
    return(
      <div >
          <button onClick={handleShow}>{show?'Ocultar':'Mostrar'}</button>
          {show===true && <TextoH2/>}
      </div>
    )        
  }