import React from 'react'
import headerCss from "./header.module.css";
const header = () => {
  return (
    <div className={headerCss.header}>
        <h1>ToDo</h1>
    </div>
  )
}

export default header