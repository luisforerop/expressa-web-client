import { type } from 'os'
import React, { FC } from 'react'

type ViolenciometroProps = {
  setLevel: Function
}

const Violenciometro: FC<ViolenciometroProps> = ({setLevel}) => {
  const levels = [ 'ALERTA', 'REACCIONA', 'URGENTE' ]

  return (
    <div>
      {levels.map((level, index) => (
        <button 
          key={`${index}-${level}`} 
          onClick={() => {
            setLevel(level)
          }}
        >
          {level}
        </button>
      ))}
    </div>
  )
}

export default Violenciometro
