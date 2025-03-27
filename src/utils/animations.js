import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}

export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(firstTarget, {
    ...animationProps,
    ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(secondTarget, {
    ...animationProps,
    ease: 'power2.inOut'
    },
    '<'
  )
}

export const animateWithGsapVideo = (target, videoRef) => {
  gsap.to(target, {
    ease: 'power1',
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart restart restart restart',
    },
    onComplete: () => {
      videoRef.current.play()
    },
  }, {scrub: 5.5},
  )
}
