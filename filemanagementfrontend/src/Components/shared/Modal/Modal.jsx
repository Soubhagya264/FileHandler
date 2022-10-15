import React from 'react'
import styles from './Modal.module.css'
import CloseIcon from "@mui/icons-material/Close";
const Modal = ({ setModalOpen, modalOpen }) => {
    const closeStyle = {
        position: 'absolute',
        top: '8px',
        right: '8px'

    }
    return (

        <>
            <div className={styles.modalbackground}>
                <div className={styles.modalcontainer}>
                    <div className={styles.modalheader}>
                        <div className={styles.modaltitle}>
                            Select file here
                        </div>
                    </div>
                    <div className={styles.modalclose}
                        onClick={() => {
                            setModalOpen(false);
                        }}
                    >
                        <CloseIcon className={styles.close} style={closeStyle} />

                    </div>
                    <div className={styles.modalbody}>
                        <div className={styles.modalbodycontainer}>
                       
                            <input className={styles.modalInput} type="file" id="file"></input>
                            <div >
                            <button className={styles.modalbuttons}>
                                Upload
                            </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal