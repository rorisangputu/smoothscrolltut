'use client'
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description/Index";
import Projects from "../components/Projects/index"
import Text from '../components/TextAnimation/Index'
export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div className={styles.page}>
      <Intro />
      <Description />
      <Projects />
      <Text/>
    </div>
  );
}
