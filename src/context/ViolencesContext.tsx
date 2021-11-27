import React, { createContext, FC, useState } from 'react'
import { tViolences } from '../../types/global'
import useGetViolencesList from '../hooks/useGetViolencesList'

type ContextValues = {
  currentViolences?: string
  setCurrentViolences?: Function
  violencesList?: tViolences[]
  setViolencesList?: Function
  listIsFetching?: boolean
}

export const ViolencesContext = createContext<ContextValues>({})

const ViolencesProvider: FC = ({children}) => {
  const [currentViolences, setCurrentViolences] = useState('')
  const { violencesList, isFetching } = useGetViolencesList()
  
  const contextValue: ContextValues = {
    currentViolences,
    setCurrentViolences,
    violencesList,
    listIsFetching: isFetching
  }
  return (
    <ViolencesContext.Provider value={contextValue}>
      {children}
    </ViolencesContext.Provider>
  )
}

export default ViolencesProvider
