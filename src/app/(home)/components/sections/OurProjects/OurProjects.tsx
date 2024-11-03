"use client";
import Button, { ButtonVariant } from "@/components/Button/Button";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import SectionText from "@/components/SectionText/SectionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import styles from "./OurProjects.module.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const OurProjects = () => {
  useGSAP(() => {
    gsap.to(`.${styles.projects__box}`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "20% center",
      },
      y: 0,

      rotate: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.projects__box}`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "20% center",
      },
      opacity: 1,
      duration: 0.5,
      ease: "none",
    });
    gsap.to(`.${styles.card__title}`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "top center",
      },
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.card__center}`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "20% center",
      },
      y: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.card__left}`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "20% center",
      },
      x: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.card__right}`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "20% center",
      },
      x: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.projects__all} button`, {
      scrollTrigger: {
        trigger: `.${styles.projects}`,
        start: "center center",
      },
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(1,0.75)",
    });
  }, []);
  return (
    <div className={styles.projects}>
      <div>
        <SectionText
          title="Our Projects"
          text="Know what we do"
          className={styles.card__title}
        />
      </div>
      <div className={styles.projects__content}>
        <div className={styles.projects__box}>
          <ProjectCard
            title="Serenity Cottage"
            location="Texas,San Antonio"
            imageSrc="project-1.jpg"
            className={styles.card__left}
          />
          <ProjectCard
            title="Serenity Cottage"
            location="Texas,San Antonio"
            imageSrc="project-2.jpg"
            className={styles.card__center}
          />
          <ProjectCard
            title="Serenity Cottage"
            location="Texas,San Antonio"
            imageSrc="project-3.jpg"
            className={styles.card__right}
          />
        </div>
        <div className={styles.projects__all}>
          <Button variant={ButtonVariant.Section}>All Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
