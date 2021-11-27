import React, { } from 'react'
import Graph from '../../components/Graph'
import PieGraph from '../../components/PieGraph'
import styles from './Stadistics.module.css'

const Stadistics = () => {
  const { stadisticContainer } = styles
  return (
    <div className={stadisticContainer}>
      <Graph/>
      <PieGraph/>
    </div>
  )
}

export default Stadistics