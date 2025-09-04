import React,{useState,useEffect} from 'react';
function WindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return <p>Width: {size.w}, Height: {size.h}</p>;
}
export default WindowSize;