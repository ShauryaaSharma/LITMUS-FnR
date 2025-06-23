import React from 'react'
import Hero from './Hero'
import About from './About'
import Particles from './Components/Particles'


const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={1000}
            particleSpread={10}
            speed={0.4}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
      </div>
    </div>
  )
}

export default App