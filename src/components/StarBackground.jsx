import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'


const StarBackground = () => {
  const [Stars, setStars] = useState([])
  const [Meteors, setMeteors] = useState([])

  useEffect(() => {
    generateStars()
    generateMeteors()

    const handelResize = () => {
      generateStars()
    }
    window.addEventListener('resize', handelResize)

    return () => {
      window.removeEventListener('resize', handelResize)
    }
  }, [])

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000)

    const newStars = []
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars)
  }

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = []
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    }
    setMeteors(newMeteors)
  }
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {Stars.map((star) => (
        <div key={star.id} className="star animate-pulse-subtle" style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          left: `${star.x}%`,
          top: `${star.y}%`,
          opacity: `${star.opacity}`,
          animationDuration: `${star.animationDuration}s`,
        }}></div>
      ))}

      {Meteors.map((meteors) => (
        <div key={meteors.id} className="meteor animate-meteor" style={{
          width: `${meteors.size * 50}px`,
          height: `${meteors.size}px`,
          left: `${meteors.x}%`,
          top: `${meteors.y}%`,
          animationDelay: `${meteors.delay}`,
          animationDuration: `${meteors.animationDuration}s`,
        }}></div>
      ))}
    </div>
  )
}

export default StarBackground
