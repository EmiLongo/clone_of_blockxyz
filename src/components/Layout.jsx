import {  useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Modal } from './Modal';
import '@styles/layout.css';
import { Loader } from './Loader';
export const Layout = ({isAnimating , setIsAnimating , isGrayscale , setIsGrayscale }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading && <Loader setIsLoading={setIsLoading} />}
    <div id='layout'>
      <Header setOpenModal={setOpenModal} />
      <Footer />
      {openModal && 
        <Modal setOpenModal={setOpenModal} 
                isAnimating={isAnimating} 
                setIsAnimating={setIsAnimating} 
                isGrayscale={isGrayscale} 
                setIsGrayscale={setIsGrayscale} 
        />
      }
    </div>
    </>
  )
}
