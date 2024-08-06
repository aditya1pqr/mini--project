import React from 'react'
import styles from "./ErrorMessage.module.css"

function ErrorMessage({foodItmes}) {
  return (
    <>
    {foodItmes.length === 0 && <h1 className={styles.error}>List is Empty</h1>}
      
    </>
  )
}

export default ErrorMessage
