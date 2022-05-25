

import React, { useState } from 'react'
const JournalPopup = () => {
    const[modalOpen, setModalOpen] = useState(false)
    return (
        <>
        <div className='journap-popup'>
            <button onclick ={()=> setModalOpen(true)}>open modal</button>
        </div>
        <Modal isOpen ={modalOpen}>
            <h2>Modal title</h2>
            <p>modal body</p>
        </Modal>
      
        </>
    )
}

export default JournalPopup