import '@styles/loader.css';
import logo from '@imgs/blockLogo.svg';
import { useEffect, useState } from 'react';

export const Loader = ({ setIsLoading }) => {
    const [isStyling1, setIsStyling1] = useState(true);
    const [isStyling2, setIsStyling2] = useState(true);

    useEffect(() => {

        const timer1 = setTimeout(() => {
            setIsLoading(false)
        }, 1800)

        const timer2 = setTimeout(() => {
            setIsStyling1(!isStyling1)
        }, 500)

        const timer3 = setTimeout(() => {
            setIsStyling2(!isStyling2)
        }, 1000)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        };
    }, []);

    return (
        <div 
            className="loader" 
            style={{ backgroundColor: isStyling2 ? '#fbfbfb' : 'transparent' }}
        >
            <img 
                src={logo} 
                alt="Loader" 
                style={{ 
                    opacity: isStyling2 ? 1 : 0, 
                    filter: `blur(${isStyling1 ? 0 : 5}px)`, 
                    backdropFilter: `blur(${isStyling1 ? 0 : 5}px)` 
                }} 
            />
        </div>
    );
};
