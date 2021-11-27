import { type } from 'os'
import React, { FC } from 'react'
import styles from './Violenciometro.module.css'

type ViolenciometroProps = {
  setLevel: Function
}

const Violenciometro: FC<ViolenciometroProps> = ({ setLevel }) => {
  const levels = ['ALERTA', 'REACCIONA', 'URGENTE']
  const { button, violenciometerContainer,  } = styles
  
  return (
    <div className={violenciometerContainer}>
      {levels.map((level, index) => (
        <button
          key={`${index}-${level}`}
          onClick={() => {
            setLevel(level)
          }}
          className={`${button} ${styles[`button${level}`]}`}
        >
          {level}
        </button>
      ))}
    </div>
  )
}

export default Violenciometro
