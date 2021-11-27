import React, { useContext, useState } from 'react'
import { tLevel } from '../../../types/global'
import ViolencesList from '../../components/ViolencesList'
import Violenciometro from '../../components/Violenciometro'
import useGetViolencesList from '../../hooks/useGetViolencesList'

const PrincipalView = () => {
  const [level, setLevel] = useState<tLevel>('ALERTA') 
  const { violencesList, isFetching } = useGetViolencesList()
  console.log('Acá están las violences list');  
  console.log(violencesList);
  
  if(isFetching) return <div>Cargando</div>

  return (
    <div>
      <Violenciometro
        setLevel={setLevel}
      />   
      <ViolencesList
        level={level}
      />
    </div>
  )
}

export default PrincipalView
