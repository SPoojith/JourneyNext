import React, { useRef, useState, useEffect } from 'react';
import './Scroll1.css';

function FosterComponent() {
  const parentRef = useRef(null);
  const parentScrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);

  useEffect(() => {
    const updateScrollerPosition = () => {
      if (parentRef.current && parentScrollerRef.current) {
        const parent = parentRef.current;
        const scroller = parentScrollerRef.current;

        const parentHeight = parent.clientHeight;
        const scrollHeight = parent.scrollHeight;

        // Calculate scroller height, capped at 30px
        const scrollerHeight = Math.min(
          (parentHeight / scrollHeight) * parentHeight,
          30
        );
        scroller.style.height = `${scrollerHeight}px`;

        // Calculate scroller top position
        const scrollerTop = (parent.scrollTop / scrollHeight) * (parentHeight - scrollerHeight);
        scroller.style.top = `${scrollerTop}px`;
      }
    };

    const handleScroll = () => {
      updateScrollerPosition();
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        const deltaY = event.clientY - startY.current;
        parentRef.current.scrollTop = startScrollTop.current + deltaY;

        // Update scroller position after dragging
        updateScrollerPosition();
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = (event) => {
      startY.current = event.clientY;
      startScrollTop.current = parentRef.current.scrollTop;
      setIsDragging(true);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    if (parentRef.current) {
      parentRef.current.addEventListener('scroll', handleScroll);
      updateScrollerPosition(); // Initial update
    }

    if (parentScrollerRef.current) {
      parentScrollerRef.current.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (parentRef.current) {
        parentRef.current.removeEventListener('scroll', handleScroll);
      }
      if (parentScrollerRef.current) {
        parentScrollerRef.current.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="Foster">
      <div className="Parent" ref={parentRef}>
        <div className="child">1</div>
        <div className="child">2</div>
        <div className="child">3</div>
        <div className="child">4</div>
        <div className="child">5</div>
        <div className="child">1</div>
        <div className="child">2</div>
        <div className="child">3</div>
        <div className="child">4</div>
        <div className="child">5</div>
        <div className="child">1</div>
        <div className="child">2</div>
        <div className="child">3</div>
        <div className="child">4</div>
        <div className="child">5</div>
      </div>
      <div className="ParentScroller" ref={parentScrollerRef}>
        <div>scroll Bar</div>
      </div>
    </div>
  );
}

export default FosterComponent;
