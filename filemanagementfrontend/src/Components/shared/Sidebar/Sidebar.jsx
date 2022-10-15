import React from 'react';
import styles from "./sidebar.module.css";
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal';
const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} />}
      <Link to="/modal"> <button
        onClick={
          (e) => {
            e.preventDefault();
            console.log('Modal opened');
            setModalOpen(true)
          }
        }
        className={styles.btn}><AddIcon></AddIcon></button></Link>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarCart}>
          <div className={styles.MyDrive}>
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
