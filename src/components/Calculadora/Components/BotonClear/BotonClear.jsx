import React from 'react'
import '../../../../styles/index.css'
export const BotonClear = ({children, clear}) => {
    return(
      <div className = "botonClear" onClick={clear}>
        {children}
      </div>
    )        
  }