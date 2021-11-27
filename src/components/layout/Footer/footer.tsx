import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const {titlefooter, copystyle, componentfooter} = styles
  return (
    <div className={componentfooter}>
        <div className={titlefooter}>
            <h5>¿Quienes somos?</h5>
            <h5>¿Que hacemos?</h5>
            <h5>¿Como lo Hacemos?</h5>
            <div className={copystyle}>
                <h5>expressa@copydrive.com</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Footer