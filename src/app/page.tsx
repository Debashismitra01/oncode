import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navbar}>
        <div className={styles.image}>
        <Image
        src="/Oncode Black.png"
        alt="Logo"
        width={160}
        height={35}
        />
        </div>
        <div className={styles.right}>
          <div className={styles.navlist}>
            <a href="/coming-soon">For Company</a>
            <a href="/coming-soon">For developer</a>
            <a href="/coming-soon">Our Client</a>
            <a href="/coming-soon">Blogs</a>
          </div>
          <a className={styles.btn}>Hire team</a>
        </div>
      </div>
      <main className={styles.main}>
            <h1>On-Demand Engineers</h1>
            <h2>Up scale your<span> Online Present</span></h2>
            <p> We are a team of enthutiast tech innovator ready to develop High-performing software solutions</p>
            <div className={styles.mainaction}>
                <div className={styles.maincontact}>
                  <a href="/coming-soon">Hire Us</a>
                </div>
                <a className={styles.mainscroll}>Learn More</a>
            </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
