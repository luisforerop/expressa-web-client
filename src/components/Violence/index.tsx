import { useRouter } from 'next/dist/client/router'
import React, { FC, useContext } from 'react'
import { ViolencesContext } from '../../context/ViolencesContext'
import Iframe from 'react-iframe'
import styles from './Violence.module.css'

// Agregar la lista al context

type ViolenceProps = {
  src: string
  title: string
  id: number
}
const Violence: FC<ViolenceProps> = ({ src, title, id }) => {
  const { setCurrentViolences } = useContext(ViolencesContext)
  const router = useRouter()

  const urlTitle = title.replaceAll(' ', '-')
  const { imageViolence, violenceContainer, titleViolence } = styles

  const handler = (e: any) => {
    e.preventDefault()
    //router.push(`/compartir/${urlTitle}`)
    router.push(`https://hackaton-3-gqktl.ondigitalocean.app/violences/${id}`)

    if (setCurrentViolences) setCurrentViolences(`${id}`)
  }
  return (
    <>
      <div
        className={violenceContainer}
      >
        {/*
        <Iframe
          url="http://www.youtube.com/embed/jhgVu2lsi_k"
          width="100%"
          height="80%"
          id="myId"
          className={embedVideo}
          position="relative"
          onLoad={() => {
            console.log('cargando');
          }}
        />
        */}
        <img
          src="https://assets.afcdn.com/album/D20161004/phalbm24932471.jpg" 
          alt="" 
          className={imageViolence}
        />
        <h3 className={titleViolence} onClick={handler} >
          {title}
        </h3>
      </div>

    </>
  )
}

export default Violence
