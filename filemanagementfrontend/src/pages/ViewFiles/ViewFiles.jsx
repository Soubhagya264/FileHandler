import React from 'react'
import styles from './ViewFiles.module.css'
import Sidebar from '../../Components/shared/Sidebar/Sidebar'
const ViewFiles = () => {
  return (
    <section className={styles.section}>
        
          <div className={styles.sidebar}>
              <Sidebar></Sidebar>
          </div>


          <div className={styles.page}>
              page
          </div>
       
      </section>
  )
}

export default ViewFiles