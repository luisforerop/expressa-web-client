import React, { } from 'react'
import Graph from '../../components/Graphics/Graph'
import LineChart from '../../components/Graphics/LineChart'
import PieGraph from '../../components/Graphics/PieGraph'
import styles from './Stadistics.module.css'

const Stadistics = () => {
  const { stadisticContainer, subStadisticContainer } = styles
  return (
    <div className={stadisticContainer}>
      <div className={subStadisticContainer}>
        <Graph/>
        <PieGraph/>
      </div>
      <LineChart/>
    </div>
  )
}

export default Stadistics