"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.isActive : ""}`}>
      <div className={styles.image}>
        <Image src="/web.png" alt="Logo" width={80} height={40} />
        <h1>Oncode</h1>
      </div>
      
      <div className={`${styles.right} ${isOpen ? styles.open : ""}`}>
        <div className={styles.navlist}>
          <a className={styles.items} href="/coming-soon">Case Study</a>
          <a className={styles.items} href="/coming-soon">Community</a>
          <a className={styles.items} href="/coming-soon">Blog</a>
          <a className={styles.items} href="/about">About Us</a>
        </div>
        <a className={styles.btn} href="/contact">Hire team</a>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={`${styles.menuToggle} ${isOpen ? styles.change : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  );
}
