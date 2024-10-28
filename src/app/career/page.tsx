import React from 'react';
import Head from 'next/head';
import styles from './Career.module.css';

const Career: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Career-Oncode</title>
      </Head>
      
      <div className={styles.content}>
        <h1>we are not hiring right now</h1>
        <p>For now we are full. If u want to contact or have anything to offer we are open for new ideas. Contact us at debankur.dutta@oncode.in</p>
        <a href="/">Go Back</a>
      </div>
    </div>
  );
};

export default Career;
