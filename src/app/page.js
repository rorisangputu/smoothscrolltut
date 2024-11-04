'use client'
import { useEffect } from "react";
import styles from "./page.module.css";
import Index from "../components/Intro";

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
      <Index/>
    </div>
  );
}
