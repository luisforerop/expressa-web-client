import React, { FC } from 'react'
import { tLevel } from '../../../types/global'
import useGetViolencesList from '../../hooks/useGetViolencesList'
import Violence from '../Violence'

type ViolencesListProps = {
  level: tLevel
}

const ViolencesList: FC<ViolencesListProps> = ({level}) => {
  const { isFetching, violencesList } = useGetViolencesList()
  return (
    <>
      {violencesList?.map(violenceList => violenceList.level !== level ? null : (
        <Violence
          key={violenceList.id}
          title={violenceList.name}
          src={violenceList.image}
          id={violenceList.id}
        />
      ))}
    </>
  )
}

export default ViolencesList
