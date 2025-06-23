import React from 'react'
import SplitText from "./Components/DecryptedText";
import Particles from './Components/Particles';
import SpotlightCard from './Components/SpotlightCard';

const About = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <>
     <div className='mt-60 relative' style={{ width: '100%', height: '600px', marginTop: '-30px' }} id='resources'>
      <div className="absolute top-0 left-0 w-full flex justify-center z-10 mt-24 top-52">
        <SplitText
          text="Resources Section"
          className="text-6xl font-extrabold text-center caprasimo-regular text-white"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={1000}
        particleSpread={10}
        speed={0.3}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={1000}
        particleSpread={10}
        speed={0.3}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center relative z-10" style={{marginTop: '-150px'}}>
    {[...Array(6)].map((_, i) => (
      <SpotlightCard
        key={i}
        className="custom-spotlight-card"
        spotlightColor="rgba(151, 16, 168, 0.66)"
      >
        <div style={{ width: '400px', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
          Card {i + 1}
        </div>
      </SpotlightCard>
    ))}
  </div>
    </>
    
  )
}

export default About