import styles from "./styles.module.css";
import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Index = () => {
    const [selectedProject, setSelectedProject] = useState(0);
    const imageContainer = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            start: "-=100px",
            end: document.body.offsetHeight,
            pin: true
        })
    }, [])
    return (
        <div className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="image"
                    />
                </div>
                <div className={styles.column}>
                    <p>
                        The flora is characterized by the process of high elevation wetland,
                        as well as yellow straw, broom sedge, tola de agua and tola amia.
                    </p>
                </div>
                <div className={styles.column}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi
                        ullam assumenda itaque dolorum vero repellendus porro quis
                        asperiores alias. Eveniet aliquam autem vero similique ipsam.
                        Consequuntur at possimus aut?
                    </p>
                </div>
            </div>
            <div className={styles.projectList}>
                {
                    projects.map((project, index) => {
                        return <div onMouseOver={() => { setSelectedProject(index) }} className={styles.projectEl} key={`p_${index}`}>
                            <p>
                                {project.title}
                            </p>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default Index;

const projects = [
    {
        title: "Salar de Atacama",
        src: "windyroad.jpg",
    },
    {
        title: "Montana Hyde",
        src: "montana.jpg",
    },
    {
        title: "Patagonia Peaks",
        src: "horizon.jpg",
    },
    {
        title: "Shed Dreams",
        src: "shed.jpg",
    },
];
