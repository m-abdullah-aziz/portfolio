import { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa'

const GotoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior:"smooth"});
    }

    useEffect(() => {
        let timeoutId = null;
        
        const handleScroll = () => {
            if (timeoutId) return;
            
            timeoutId = setTimeout(() => {
                toggleVisibility();
                timeoutId = null;
            }, 100); // Throttle to every 100ms
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [])

    return (
        <div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
            {isVisible && (
                <button 
                    type="button" 
                    onClick={scrollToTop} 
                    className="inline-flex items-center p-4 rounded-full shadow-sm text-white bg-[#915eff] transition-opacity hover:bg-[#1d1836] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    <FaArrowUp className="h-5 w-5 icon" aria-hidden='true'/>
                </button>
            )}
        </div>
    )
}

export default GotoTop;