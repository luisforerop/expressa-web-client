import React, { FC, useState } from 'react'
import { tLevel } from '../../../types/global'
import useGetViolencesList from '../../hooks/useGetViolencesList'
import Violence from '../Violence'
import styles from './ViolencesList.module.css'


type ViolencesListProps = {
  level: tLevel
}

const ViolencesList: FC<ViolencesListProps> = ({ level }) => {
  const { isFetching, violencesList } = useGetViolencesList()
  const { violencesListContainer } = styles
  return (
    <div className={violencesListContainer}>
      {violencesList?.map(violenceList => violenceList.level !== level ? null : (
        <Violence
          key={violenceList.id}
          title={violenceList.name}
          src={violenceList.image}
          id={violenceList.id}
        />
      ))}
    </div>
  )
}

export default ViolencesList
