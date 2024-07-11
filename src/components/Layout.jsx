import { useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Modal } from './Modal';
import '@styles/layout.css';
export const Layout = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div id='layout'>
      <Header setOpenModal={setOpenModal} />
      <Footer />
      {openModal && <Modal setOpenModal={setOpenModal} /> }
    </div>
  )
}
