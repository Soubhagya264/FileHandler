import React from 'react'
import styles from './ViewFiles.module.css'
import Sidebar from '../../Components/shared/Sidebar/Sidebar'
import MyDrive from '../MyDrive/MyDrive'
import FilePage from '../FilePage/FilePage'
const ViewFiles = () => {
  return (
    <section className={styles.section}>
        
          <div className={styles.sidebar}>
          
              <Sidebar></Sidebar>
          </div>


          <div className={styles.page}>
              <MyDrive></MyDrive>
          </div>
       
      </section>
  )
}

export default ViewFiles