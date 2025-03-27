import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useRef, useState } from 'react';
import { animateWithGsap, animateWithGsapVideo } from '../utils/animations';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const videoRef = useRef()

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    animateWithGsap('#hero', { opacity: 1, y: 10, delay: 1, duration: 1, ease: 'power2.inOut'})
    animateWithGsap('#cta', { opacity: 1, y: -50, delay: 1, duration: 1, ease: 'power2.inOut' })
    animateWithGsapVideo('#hero', videoRef)
  }, [])

  return (
    <section className="w-full nav-height bg-black relative common-padding">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video id='videoHero' className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} ref={videoRef}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero