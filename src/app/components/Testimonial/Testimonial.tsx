'use client';
import './Testimonial.css';
import ReviewCard from './ReviewCards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from '../../../../public/Assests/Testimonial/Ammi.jpg'
import { useEffect, useState } from 'react';

interface ReviewCardProps{
    altText: string;
    imageSrc: string;
    title: string;
    subheaderLink: string;
    bodyText: string;
}
function Testimonial() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);  // Set this to true after the component has mounted on the client
    }, []);
  
    if (!isClient) {
      return null;  // Avoid rendering the Slider component server-side
    }
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const Data : ReviewCardProps ={
        altText : 'Aparna A',
        imageSrc: a.src,
        title :'Aparna A',
        subheaderLink :'https://www.linkedin.com/in/aparna-a-7b0b3b1b/',
        bodyText:`Quick grasping skill, keen learner, collaborative, ownership of 
        deliverables. Team player with moral collaborative conduct.`
    }
    return ( 
        <div className='TestimonalContainer'>
            <div className='TestimonalHeader'>
                <h1>Throughout my journey, I’ve built strong relationships with family, friends, 
                    colleagues, and leaders who’ve witnessed my dedication, teamwork, and 
                    positive attitude.
                </h1>
            </div>
            <div style={{paddingLeft:'25px',paddingRight:'25px',height:'90%'}}>
            <Slider {...settings} >
                <ReviewCard {...Data}></ReviewCard>
                <ReviewCard {...Data}></ReviewCard>
                <ReviewCard {...Data}></ReviewCard>
                <ReviewCard {...Data}></ReviewCard>
                <ReviewCard {...Data}></ReviewCard>
                <ReviewCard {...Data}></ReviewCard>
            </Slider>
            </div>
        </div>
    );
}

export default Testimonial;
