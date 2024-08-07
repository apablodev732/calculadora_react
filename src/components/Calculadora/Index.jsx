import { useState } from 'react'
import '../../styles/index.css'
import { Boton } from'./Components/Boton/Boton'
import { BotonClear } from'./Components/BotonClear/BotonClear'
import { Pantalla } from'./Components/Pantalla/Pantalla'
import { evaluate } from 'mathjs'

export function IndexCalculadora() {
    const[input, setInput] = useState('');
    const agregarInput = (dato) =>{
        setInput(input + dato);
    }
    const clearPantalla = () =>{
        setInput('');
    }

    const calcularOperacion = () =>{
        if(input){
            setInput(evaluate(input));
        }else{
            alert('No hay numero')
        }
    }


    return (
        <div className="bloqGeneral">
            <div className="bloqCalculadora">
                <div className="bloqPantalla"><Pantalla>{input}</Pantalla></div>
                <div className="bloqBotones">
                    <div className="filaBotones">
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>

                    </div>

                    <div className="filaBotones">
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>    
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                    </div>
                    
                    <div className="filaBotones">
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                    </div>
                    <div className="filaBotones">
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={calcularOperacion}>=</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>
                    </div>

                </div>   
                <div className="bloqBotonClear"><BotonClear clear={clearPantalla}>Limpiar</BotonClear></div>     
            </div>     
        </div>
    )
  }