import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Disha</h1>
        <p className={styles.description}>
        I'm an AI engineer who ships LLM-powered products and computer
        vision systems, from RAG and agent workflows to privacy-first image
        pipelines. I like taking ideas from prototype to production. Let's
        connect!
        </p>
        <a href="mailto:disharevandkar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/self.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};