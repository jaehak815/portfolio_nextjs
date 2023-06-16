import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
      <div className={styles.container}>
        <div>©2023 JayJayJay. All rights reserved.</div>
      <div className={styles.social}>

        <Image src="/1.png"  width={15} height={15} className={styles.icon} alt="Jay Dev Facebook Account"/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Jay Dev"/>
        <Image src="/3.png"  width={15} height={15} className={styles.icon} alt="Jay Dev"/>
        <Image src="/4.png"  width={15} height={15} className={styles.icon} alt="Jay Dev"/>
        </div>
      </div>
  )
}

export default Footer