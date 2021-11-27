import { useRouter } from 'next/dist/client/router'
import React, { FC, useContext } from 'react'
import { ViolencesContext } from '../../context/ViolencesContext'

// Agregar la lista al context

type ViolenceProps = {
  src: string
  title: string
  id: number
}
const Violence: FC<ViolenceProps> = ({src, title, id}) => {
  const { setCurrentViolences } = useContext(ViolencesContext)
  const router = useRouter()
  const urlTitle = title.replaceAll(' ', '-')
  const handler = (e: any) => {
    e.preventDefault()
    router.push(`/compartir/${urlTitle}`)
    if(setCurrentViolences) setCurrentViolences(`${id}`)
  }
  return (
    <div
      onClick={handler} 
    >
      <img src={src} alt='Violencia' />
      <h3>
        {title}
      </h3>
    </div>
  )
}

export default Violence
