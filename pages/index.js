import Head from 'next/head'
import styles from '../styles/Home.module.css'
import math, { compare, divide } from '../math'
import React, { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const handleCompareButton = () => {
    const parsed = parseInt(inputRef.current.value, 10);
    const parsed2 = parseInt(inputRef2.current.value, 10);
    alert(compare(parsed, parsed2));
  }
  const handleDivideButton = () => {
    const parsed = parseInt(inputRef.current.value, 10);
    const parsed2 = parseInt(inputRef2.current.value, 10);
    alert(divide(parsed, parsed2));
  }

  const [inputUpperValue, setUpperInputValue] = useState("");
  const handleInputChange = (e) => {
    setUpperInputValue(e.target.value)
  }

  const handleTotobutton = () => {
    alert(inputUpperValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">MaumauLand!</a>
        </h1>

        <p className={styles.description}>
          Ici on casse des maths {' '}
        </p>

        <input type="text" defaultValue="2" ref={inputRef} />
        <input type="text" defaultValue="5" ref={inputRef2} />

        <input type="submit" value="compare" onClick={handleCompareButton} />
        <input type="button" value="divide" onClick={handleDivideButton} />

        <input value={inputUpperValue} onChange={handleInputChange} />
        <input type="button" value="Toto" onClick={handleTotobutton} />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
