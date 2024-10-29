import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";
import Accordion from "../accordion/accordion";
import LogoCarousel from "../LogoCarousel/LogoCarousel";

export default function Hero(){
    return(
        <div className={styles.hero} id="Hero">
            <h2 className={styles.title}>Scale Your Online Presence with Skilled Tech Developers</h2>
            
            <div className={styles.community}>
                <div className={styles.text}>
                    <h2>Community</h2>
                    <p>At Oncode, we’re a vibrant, diverse community driving innovation across tech startups, excelling in hackathons, and pushing the limits of competitive coding. We’re here to build, break, and reshape the boundaries of technology, turning bold ideas into some of the most audacious and impactful solutions in the industry.</p>
                </div>
                <div className={styles.imgcon}>
                    <img
                        src="/community.jpg"
                        className={styles.image}
                        alt="Community Image"
                    />
                </div>
            </div>
            
            <div className={styles.upskill}>
                <div className={styles.imgcon}>
                    <img
                        src="/upskill.jpg"
                        className={styles.image}
                        alt="Upskilling Background"
                    />
                </div>
                <div className={styles.text}>
                    <h2>Upskilling</h2>
                    <p>We’re relentlessly focused on upskilling, staying ahead with cutting-edge expertise in AI/ML, big data management, cloud computing, and cybersecurity. This commitment fuels our projects, ensuring we bring advanced, secure, and scalable solutions to the forefront of technology. At Oncode, we don’t just keep up with tech trends—we set them.</p>
                </div>
            </div>
            
            <div className={styles.affordable}>
                <div className={styles.text}>
                    <h2>Affordability</h2>
                    <p>As one of the most affordable freelance teams, we’re dedicated to delivering high-quality solutions without breaking the bank. Our focus on cost-efficiency, combined with top-tier skills, allows startups and businesses to access advanced technology and innovation without compromise. At Oncode, value and quality go hand in hand.</p>
                </div>
                <div className={styles.imgcon}>
                    <img
                        src="/affordable.webp"
                        className={styles.image}
                        alt="Affordability Background"
                    />
                </div>
            </div>
            
            <div className={styles.performance}>
                <div className={styles.imgcon}>
                    <img
                        src="/peformancee.webp"
                        className={styles.image}
                        alt="Performance Image"
                    />
                </div>
                <div className={styles.text}>
                    <h2>Performance</h2>
                    <p>We’re a performance-driven team, leveraging powerful tools and languages like Next.js, Go, and Rust to ensure every solution is fast, efficient, and scalable. At Oncode, we’re committed to using the best technologies available to deliver results that meet the highest standards of speed and reliability, pushing the limits of what’s possible in tech.</p>
                </div>
            </div>
            <LogoCarousel/>
            <Accordion/>
        </div>
    );
}
