import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out',
        reset: false
      });
    }

    return () => ScrollReveal().destroy();
  }, []);

  return sectionRef;
};

export default useScrollReveal;