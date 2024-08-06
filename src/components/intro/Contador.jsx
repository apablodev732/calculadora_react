import {useState} from "react";
export const Contador = () => {
    const [number, setNumber] = useState(0);
    const sumar = () =>{
        setNumber(number+1);
    }
    const restar = () =>{
        setNumber(number-1);
    }
    const likes = ({ likes }) =>{
        return <button>{likes} likes</button>
    }
    return(
      <div >
          <p>{number}</p>
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
            <div><likes likes={12}/></div>
      </div>
    )
  }