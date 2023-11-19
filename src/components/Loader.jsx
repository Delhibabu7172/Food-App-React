import React from 'react'
import loaderstyles from "./Loader.module.css"

const Loader = () => {
  return (
    <div>
      <span className={loaderstyles.loader}></span>
    </div>
  )
}

export default Loader