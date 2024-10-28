import React from 'react';
import Head from 'next/head';
import styles from './ComingSoon.module.css';

const ComingSoon: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon</title>
      </Head>
      
      <div className={styles.content}>
        <h1>Coming Soon</h1>
        <p>We are working hard to bring you something amazing!</p>
        <a href="/">Go Back</a>
      </div>
    </div>
  );
};

export default ComingSoon;
