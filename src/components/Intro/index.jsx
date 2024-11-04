import Image from 'next/image'
import styles from './styles.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const Index = () => {

  const backgroundImage = useRef(null)
  const introImage = useRef(null)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "tops",
        end: "+=500px",
        scrub: true,
        markers: true
      }
    })

    tl.from(backgroundImage.current, { clipPath: "inset(15%)" })
      .to(introImage.current, { height: '200px' }, 0)
  }, [])

  return (
    <div className={styles.intro}>
      <div ref={backgroundImage} className={styles.backgroundImage}>
        <Image
          src={'/images/abstract.jpg'}
          fill={true}
          alt="Abstract"
        />
      </div>

      <div className={styles.introContainer}>
        <div ref={introImage} data-scroll data-scroll-speed='0.3' className={styles.introImage}>
          <Image
            src={'/images/alpaca.jpg'}
            fill={true}
            alt="background image"
          />
        </div>
        <h1 data-scroll data-scroll-speed='0.7'>Smooth Scroll</h1>
      </div>
    </div>
  )
}

export default Index
