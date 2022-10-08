import React from 'react'
import styles from './Btn.module.scss'

const Btn = ({children, ...props}) => {
  return (
    <button {...props} className={styles.btn}>
        {children}
    </button>
  )
}

export default Btn
