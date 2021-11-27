import React, { useState } from "react";
import styles from './SelectSharingType.module.css'

const SelectSharingType = () => {
  const [isBrowser, setIsBrowser] = useState(true);
  const { selectSharingType } = styles
    return (
      <div 
        className={selectSharingType}
      >
        Test
      </div>
    )
}

export default SelectSharingType;