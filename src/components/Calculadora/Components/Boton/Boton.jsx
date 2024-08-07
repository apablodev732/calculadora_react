import '../../../../styles/index.css'
export const Boton = ({children, manejarClic}) => {
    const esOperador = (value) =>{
      return isNaN(value) && value !=="=" && value !=="."?'operador':'';
    }
    return(
      <div className ={`bloqBoton ${esOperador(children)}`.trim()} onClick={() => {manejarClic(children)}}>
        {children}
      </div>
      
      
    )        
  }