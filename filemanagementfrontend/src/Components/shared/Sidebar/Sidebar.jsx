import React from 'react';
import styles from "./sidebar.module.css";
import AddIcon from '@mui/icons-material/Add';
const Sidebar = () => {
  return (
    <>

      <button className={styles.btn}><AddIcon></AddIcon> </button>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarCart}>
          <div className={styles.cartElement}>
            My Drive
          </div>
          <div className={styles.cartElement}>
            Recent
          </div>
          <div className={styles.cartElement}>
            Shared with me
          </div>
          <div className={styles.cartElement}>
            Trash
          </div>
        </div>
      </div>
    </>

  );
}

export default Sidebar;
