import {useState} from "react";
export const Counter = () => {
    const [number, setNumber] = useState(0);
    const sumar = () =>{
        setNumber(number+1);
    }
    const restar = () =>{
        setNumber(number-1);
    }
    return(
      <div >
          <p>{number}</p>
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
      </div>
    )    
  }