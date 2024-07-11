import '@styles/modal.css'
import cross from '@imgs/cross.svg'
import boxchecked from '@imgs/boxchecked.svg'
import boxunchecked from '@imgs/boxunchecked.svg'
import { useState } from 'react'
export const Modal = ({setOpenModal}) => {
  const [isCheck1, setIsCheck1] = useState(false);
  const [isCheck2, setIsCheck2] = useState(false);

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
              <img src={isCheck1 ? boxchecked : boxunchecked} alt="Choose for reduce color" 
                    onClick={() => setIsCheck1(!isCheck1)}
                    width="24"
              />
            </div>
            <div className="line"></div>
            <div>
              <p>Reduce motion</p>
              <img src={isCheck2 ? boxchecked : boxunchecked} alt="Choose for reduce motion" 
                    onClick={() => setIsCheck2(!isCheck2)}
                    width="24"
              />
            </div>
          </div>
        </article>
    </div>
  )
}
