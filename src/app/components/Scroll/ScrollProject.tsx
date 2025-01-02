"use client"
import "./Scroll.css";
import { useEffect, useRef, useState } from "react";
import st from "../../../../public/Assests/subtrash.png"
import K from '../../../../public/Assests/KTCDA.png'
import Acc from '../../../../public/Assests/accenture.jpg'
import P from '../../../../public/Assests/Prescreener.png'
import AR from '../../../../public/Assests/AluminiRecognition.png'
import PI from '../../../../public/Assests/PatientIdentification.png'
import CR from '../../../../public/Assests/CarRental.png'
import ProjectCard from "./ProjectCard";
interface ScrollProjectProps {
  DefaultText: string;
}
function ScrollProject({DefaultText}:ScrollProjectProps) {
  const parentRef = useRef(null);
  const ScrollBarRef = useRef(null);
  const [height, setheight] = useState("0px");
  const [Text, setText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        const parentHeight = parentRef.current.clientHeight;
        const maxScroll = parentHeight - 30;
        const scrollPercentage = parentRef.current.scrollTop / 3;
        setheight(`${Math.min(scrollPercentage, maxScroll)}px`);

        // Determine text based on scroll percentage
        let newText = "Projects";
        if (scrollPercentage <= 50) {
            newText = "Projects";
        } else if (scrollPercentage <= 100) {
          newText = "Projects 1";
        } else if (scrollPercentage <= 200) {
          newText = "Projects 2";
        } else if (scrollPercentage <= 350) {
          newText = "Projects 3";
        } else if (scrollPercentage <= 450) {
          newText = "Projects 4";
        } else if (scrollPercentage <= 500) {
          newText = "Projects 5";
        } else if (scrollPercentage <= 600) {
          newText = "Projects 6";
        } else if (scrollPercentage <= 700) {
          newText = "Projects 7";
        }
        setText(newText);
      }
    };

    // Add the scroll event listener
    const container = parentRef.current || window;
    container.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Foster">
        <div className="Parent" ref={parentRef}>
          <div className="child">
            <ProjectCard imageUrl={Acc.src} Heading={"React Dev @ Accenture"} Text={""}/>
            <ProjectCard imageUrl={st.src} Heading={"SubTrash"} Text={"I was the react-native dev for project Subtrash and was responsible for developing both android and ios mobile application for subtrash."}/>
            <ProjectCard imageUrl={P.src} Heading={"Prescreener"} Text={"I worked as an react and as react-native dev for project Prescreener and was responsible for developing Web, android and ios mobile application for Prescreener."}/>
            <ProjectCard imageUrl={K.src} Heading={"Karnataka Tank Conservation & Development Authority"} Text={"I was an Angular dev for project KTCDA and was responsible for adding multiple feature and graph enhancement"}/>
            <ProjectCard imageUrl={PI.src} Heading={"Patient Identification using Facial Recognition "} Text={"Using LPBH Algorithm and python tools worked on this sytem which could recognize and fetch Patient details "}/>
            <ProjectCard imageUrl={CR.src} Heading={"Car Rental"} Text={"its a simple car rental full stack project with react as frontend, flask as backend and mongodb for the DB"}/>
            <ProjectCard imageUrl={AR.src} Heading={"College Allumini Recognition"} Text={"Using LPBH Algorithm and python tools worked on this sytem which could recognize and fetch alumini details."}/>
          </div>
        </div>
        <div
          className="ParentScroller"
          ref={ScrollBarRef}
          style={{ transform: `translateY(${height})` }}
        >
          {Text ? Text : DefaultText}
        </div>
      </div>
    </>
  );
}

export default ScrollProject;
