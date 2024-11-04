import styles from './styles.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const DescIndex = () => {



    const phrases = [
        "Los Flamencos National Reserve",
        "is a nature reserve located",
        "in the commune of San Pedro De atacama",
        "just 15km from the badlands of",
        "Tawanaki"
    ]
    return (
        <div className={styles.description}>
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }
        </div>
    )
}

export default DescIndex

function AnimatedText({ children }) {

    const text = useRef(null)
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
                markers: true
            },
            left: "-200px",
            opacity: 0
        })

    }, [])

    return (
        <p ref={text}>{children}</p>
    )
}