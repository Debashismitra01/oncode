"use client"
//import Image from "next/image";

import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/Footer";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Oncode</title>
      </Head>
      <Navbar/>
      <main className={styles.main}>
            <h2 className={styles.textanimate} >Crafting Experience</h2>
            <p> We are a team of enthutiast tech innovator ready to develop High-performing software solutions</p>
            <div className={styles.mainaction}>
                <div className={styles.maincontact}>
                  <a href="/contact">Hire Us</a>
                </div>
                <a className={styles.mainscroll} href="#Hero">Learn More</a>
            </div>
      </main>
      <Hero/>
      
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  );
}
