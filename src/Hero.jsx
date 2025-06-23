import React, { useState, useEffect } from 'react'
import GooeyNav from './Components/GooeyNav'
import Aurora from './Components/Aurora';
import CardSwap, { Card } from './Components/CardSwap'
import RotatingText from './Components/RotatingText'
import './App.css';
import litmusImg from './assets/images/LITMUS.jpeg';
import FnR from './assets/images/FnR.jpg'



const Hero = () => {

  const items = [
    { label: "Home", href: "#" },
    { label: "Resources", href: "#resources" },
    { label: "Work Alloted", href: "#" },
  ];

  const [cardWidth, setCardWidth] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(Math.min(window.innerWidth - 32, 500));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
        <div className='relative h-[500px] '>
        <div className='flex absolute justify-center w-full lg:mt-8 md:mt-6 sm:mt-4 w-full max-w-screen mt-4 overflow-hidden'>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        </div>
        <div className='absolute top-24 mt-44 ml-20 h-[350px] w-[500px]'>
          <p className='text-white caprasimo-regular text-bold text-8xl flex justify-center'>LITMUS</p>
          <p className='text-white caprasimo-regular text-bold text-3xl flex justify-center pb-4'>Finance and Registration</p>
        <RotatingText
          texts={['Weaving Words', 'Creating Legacies']}
          mainClassName="px-2 sm:px-2 md:px-3 bg-blue-700 caprasimo-regular text-3xl text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" } }
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2500}
        />
        </div>
        
        <div className='h-[10px] absolute w-[1150px] text-white'>
        <div>
          <CardSwap
            cardDistance={60}
            verticalDistance={10}
            delay={4000}
            pauseOnHover={false}
          >
            <Card>
              <div className="relative w-full h-full">
                <img src={litmusImg} alt="LITMUS" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                <h3 className="relative z-10 pt-2 pl-2 font-bold text-white drop-shadow-lg">LITMUS</h3>
              </div>
            </Card>
            <Card>
            <img src={FnR} alt="LITMUS" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
            <h3 className="relative z-10 pt-2 pl-2 font-bold text-white drop-shadow-lg">Finance and Registration</h3>
            </Card>
            <Card>
            <img src={FnR} alt="LITMUS" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
            <h3 className="relative z-10 pt-2 pl-2 font-bold text-white drop-shadow-lg">Budget and Yada Yada</h3>
            </Card>
          </CardSwap>
        </div>
        </div>
    </div>
  )
}

export default Hero