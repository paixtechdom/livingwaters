import { useState, useEffect } from "react";



export const Parallax = ({ id, children, className, type }) => {
  const [isPosMatch, setIsPosMatch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        let pos = element.getBoundingClientRect();
        // if (pos.top < 800 && pos.top > -100) {
        if (pos.top < 800) {
          setIsPosMatch(true);
        } else {
          setIsPosMatch(false);
        }
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <div
      id={id || "string"}
      className={`relative transition-all duration-1000 ease-in-out 
        ${isPosMatch ? 
        'opacity-100 scale-100 translate-y-0 bg-transparent'
        : 
        type == "right" ?
        'opacity-0 scale-80 translate-x-20' :
        type == "left" ?
        'opacity-0 scale-70 -translate-x-20' :

        'opacity-0 scale-70 translate-y-20'

        } ${className}`}
    >
      {children}
    </div>
  );
};
