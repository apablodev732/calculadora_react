import '../../styles/index.css'
import { Boton } from'./Components/Boton/Boton'
import { BotonClear } from'./Components/BotonClear/BotonClear'
import { Pantalla } from'./Components/Pantalla/Pantalla'

export function IndexCalculadora() {
    return (
        <div className="bloqGeneral">
            <div className="bloqCalculadora">
                <div className="bloqPantalla"><Pantalla>12</Pantalla></div>
                <div className="bloqBotones">
                    <Boton>2</Boton>
                    <Boton>2</Boton>
                    <Boton>2</Boton>
                    <Boton>2</Boton>
                    <Boton>2</Boton>



                </div>   
                <div className="bloqBotonClear"><BotonClear>Limpiar</BotonClear></div>     
            </div>     
        </div>
    )
  }