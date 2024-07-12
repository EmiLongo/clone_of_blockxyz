import '@styles/modal.css'
import cross from '@imgs/cross.svg'
import boxchecked from '@imgs/boxchecked.svg'
import boxunchecked from '@imgs/boxunchecked.svg'
import { useState } from 'react'
export const Modal = ({setOpenModal , isAnimating , setIsAnimating , isGrayscale , setIsGrayscale}) => {
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);

  const handleColor = () => {
    setIsCheck1(!isCheck1)
    setIsGrayscale(!isGrayscale)
    document.body.style.filter = isGrayscale ? 'none' : 'grayscale(100%)';
  }

  const handleAnimation = () => {
    setIsCheck2(!isCheck2)
    setIsAnimating(!isAnimating)
  }
  
  return (
    <div id="modal" className="modal">
        <div className="modal-bg" onClick={() => setOpenModal(false)}>
        </div>
        <article className="modal-content">
          <div className="modal-title">
            <div>
              <h3>Accessibility</h3>
              <div className='cross'><img src={cross} alt="Close Window" onClick={() => setOpenModal(false)} width="24"/></div>              
            </div>
            <div>
              <p>Use the controls below to customize your web experience.</p>
            </div>
          </div>
          <div className="modal-options">
            <div>
              <p>Reduce color</p>
              <img src={isGrayscale ? boxchecked : boxunchecked} alt="Choose for reduce color" 
                    onClick={handleColor}
                    width="24"
              />
            </div>
            <div className="line"></div>
            <div>
              <p>Reduce motion</p>
              <img src={!isAnimating ? boxchecked : boxunchecked} alt="Choose for reduce motion" 
                    onClick={handleAnimation}
                    width="24"
              />
            </div>
          </div>
        </article>
    </div>
  )
}
