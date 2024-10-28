// components/LogoCarousel.js
import Image from 'next/image';
import styles from './LogoCarousel.module.css';

const logos = [
  '/logo/logo1.png',
  '/logo/logo2.webp',
  '/logo/logo3.png',
  '/logo/logo4.png',
  '/logo/logo5.png',
  '/logo/logo6.png',
  // Add as many logos as you have
];

export default function LogoCarousel() {
  const repeatedLogos = [];
  const totalLogos = 100;

  // Generate 100 logos by looping through the original array
  for (let i = 0; i < totalLogos; i++) {
    repeatedLogos.push(logos[i % logos.length]);
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        {repeatedLogos.map((logo, index) => (
          <div className={styles.logo} key={index}>
            <Image src={logo} alt={`Logo ${index + 1}`} width={160} height={35} />
          </div>
        ))}
      </div>
    </div>
  );
}
