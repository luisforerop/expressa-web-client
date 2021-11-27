import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  const {headertitle } = styles
  return (
    <div className={headertitle}>
      <h1>EXPRESSA</h1>
    </div>
  )
}

export default Header
