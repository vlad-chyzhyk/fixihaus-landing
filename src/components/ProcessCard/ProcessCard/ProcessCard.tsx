"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ProcessEndItem from "../ProcessEndItem/ProcessEndItem";
import ProcessItem from "../ProcessItem/ProcessItem";
import styles from "./ProcessCard.module.scss";
type Props = {
  trigger: string;
};
gsap.registerPlugin(useGSAP);

const ProcessCard = ({ trigger }: Props) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
    });
    gsap.to(`.${styles.circle__first}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.circle__second}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.circle__third}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.circle__fourth}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.text__first}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.6,0.75)",
    });
    gsap.to(`.${styles.text__second}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      x: 0,
      markers: true,
      delay: 0.1,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.text__third}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      x: 0,
      delay: 0.2,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(1,0.75)",
    });
    gsap.to(`.${styles.text__fourth}`, {
      scrollTrigger: { trigger: `.${trigger}`, start: "20% center" },
      x: 0,
      delay: 0.3,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(1.2,0.75)",
    });
  }, []);

  return (
    <div className={styles.process}>
      <ProcessItem
        num="1"
        title="Initial Consultation"
        text="Begin your journey by sharing your ideas with us. During the initial consultation, we'll discuss your vision, preferences, and budget, laying the groundwork for a personalized home-building experience."
        circleGsapClass={styles.circle__first}
        textGsapClass={styles.text__first}
      />
      <ProcessItem
        num="2"
        title="Design and Planning"
        text="Our team of experts will bring your ideas to life through detailed design and planning. We'll work closely with you to ensure every detail is considered and aligned with your vision."
        circleGsapClass={styles.circle__second}
        textGsapClass={styles.text__second}
      />
      <ProcessItem
        num="3"
        title="Construction"
        text="Watch as your dream home takes shape during the construction phase. Our skilled builders use top-notch materials and precision techniques to bring the design to life, ensuring quality at every step."
        circleGsapClass={styles.circle__third}
        textGsapClass={styles.text__third}
      />
      <ProcessEndItem
        title="Completion and Handover"
        text="Upon completion, we conduct a thorough inspection to ensure your home meets our high standards. We then hand over the keys, marking the beginning of a new chapter in your bespoke home."
        circleGsapClass={styles.circle__fourth}
        textGsapClass={styles.text__fourth}
      />
    </div>
  );
};

export default ProcessCard;
