import React, { useContext, useEffect, useState } from 'react'
import { tViolences } from '../../types/global'
import { ViolencesContext } from '../context/ViolencesContext'

const useGetViolencesList = () => {
  // const { setViolencesList, violencesList } = useContext(ViolencesContext)
  const [violencesList, setViolencesList] = useState<tViolences[]>() 
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    setIsFetching(true)
    fetch('https://hackaton-3-gqktl.ondigitalocean.app/api/violences/search')
      .then(response => response.json())
      .then(data => {
        setViolencesList(data.list)
        setIsFetching(false)
      })
    
  }, [])

  return { violencesList, isFetching }
}

export default useGetViolencesList
