import React from 'react'
import styles from "./DetailScreen.module.css"

function ImageBanner({image,title}) {
    const backgroundString = `--background: url(${image})`
  return (
    <div div className={styles.image_banner}
    style={{
        backgroundSize:'cover',
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
    }}>
        <div className={styles.image_title}>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default ImageBanner