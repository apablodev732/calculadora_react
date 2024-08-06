import {useState, useEffect} from "react";
export const TextoH2 = () => {
    const [text, setText] = useState("");
    const handleText = (e) =>{
        setText(e.target.value);
    }
    useEffect( () => {
        console.log('componente montado');
        return () => {
        console.log('componente desmontado');
        }
     },[]);
    return(
        <div>
            <input type="text" onChange={handleText} />
             <p>{text}</p>
        </div>
    )
  }