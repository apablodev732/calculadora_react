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
<<<<<<< HEAD
                    <Boton>2</Boton>

=======
>>>>>>> 64c2911fef5ac16bf117565549e5e626798f2650

                </div>   
                <div className="bloqBotonClear"><BotonClear>Limpiar</BotonClear></div>     
            </div>     
        </div>
    )
  }