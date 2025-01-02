"use client"
import './Scroll.css'
import { useEffect, useRef, useState } from 'react';
function Scroll ({index,images,DefaultText}){
    const parentRef = useRef(null);
    const ScrollBarRef = useRef(null);
    const [height,setheight] = useState('0px');
    const [Text,setText] = useState('');

    useEffect(()=>{
        const handleScroll = () => {
            if (parentRef.current) {
                const parentHeight = parentRef.current.clientHeight;
                const maxScroll = parentHeight -30;
                const scrollPercentage = ((parentRef.current.scrollTop /((parentRef.current.scrollHeight/parentHeight)-1)));
                console.log('1',parentHeight)
                console.log("2",parentRef.current.scrollTop)
                console.log("3",scrollPercentage)
                console.log("5",parentRef.current.scrollHeight)
                setheight(`${Math.min(scrollPercentage, maxScroll)}px`)
                console.log(scrollPercentage)
                if(index === 0){                    
                    let newText = DefaultText;
                    if (scrollPercentage <= 100) {
                        newText = 'Age 23';
                    }
                    else if (scrollPercentage <= 200) {
                        newText = 'Age 22';
                    }
                    else if (scrollPercentage <= 300) {
                        newText = 'Age 21';
                    }
                    else if (scrollPercentage <= 400) {
                        newText = 'Age 20';
                    }
                    else if (scrollPercentage <= 500) {
                        newText = 'Age 19';
                    }
                    else if (scrollPercentage <= 600) {
                        newText = 'Age 18';
                    }
                    else if (scrollPercentage <= 700) {
                        newText = 'Age 17';
                    }
                    setText(newText);
                }else if(index === 1){
                    let newText = DefaultText;
                    if (scrollPercentage <= 50) {
                        newText = DefaultText;
                    }
                    else if (scrollPercentage <= 310) {
                        newText = 'Photography';
                    }
                    else if (scrollPercentage <= 480) {
                        newText = 'WallPainting';
                    }
                    else if (scrollPercentage <= 700) {
                        newText = 'Cooking';
                    }
                    setText(newText);   
                }
            }
          };
      
          // Add the scroll event listener
          const container = parentRef.current;
          container.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener on component unmount
          return () => {
            container.removeEventListener('scroll', handleScroll);
          };  
    },[])

    return (
        <>
            <div className="Foster">
                <div className="Parent" ref={parentRef}>
                    {images.map((image,index) => (    
                        <div className="child" key={index}><img src={image} width="100%" height='100%' alt='hi'/></div>
                    ))
                    }
                </div>
                <div className="ParentScroller" ref={ScrollBarRef} style={{ transform: `translateY(${height})` }}>
                    {Text?Text:DefaultText}
                </div>
                
             </div>
        </>
    );
}

export default Scroll;