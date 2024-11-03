"use client";

import SectionText from "@/components/SectionText/SectionText";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./OurServices.module.scss";

gsap.registerPlugin(useGSAP);

const OurServices = () => {
  useGSAP(() => {
    gsap.to(`.${styles.side__card}`, {
      scrollTrigger: { trigger: `.${styles.services}`, start: "top center" },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.center__card}`, {
      scrollTrigger: { trigger: `.${styles.services}`, start: "top center" },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.section__text}`, {
      scrollTrigger: { trigger: `.${styles.services}`, start: "top center" },
      y: 0,
      duration: 2,
      opacity: 1,
      ease: "elastic.out(0.8,0.75)",
    });
  }, []);
  return (
    <div className={styles.services}>
      <div className={styles.services__imageBox}>
        <div className={styles.services__imageWrapper}>
          <Image
            src="/assets/images/common/squares-services.png"
            alt="squares"
            fill
          />
        </div>
      </div>
      <div className={styles.services__content}>
        <SectionText
          title="Our Services"
          text="Choose Your Option"
          className={styles.section__text}
        />
        <div className={styles.services__cards}>
          <ServicesCard
            imageSrc="renovation.svg"
            title="Renovation & Remodeling"
            text="Transform your existing space into a modern masterpiece with our
          renovation and remodeling expertise. Whether it's a single room
          or an entire home, we bring creativity and craftsmanship to every
          project."
            className={styles.side__card}
          />
          <ServicesCard
            imageSrc="custom.svg"
            title="Custom Home Building"
            text="Imagining a home that perfectly suits your lifestyle? Our custom home building services cater to your unique needs, ensuring that every corner of your new home reflects your vision."
            className={styles.center__card}
          />
          <ServicesCard
            imageSrc="consultation.svg"
            title="Consultation and Design"
            text="Our consultation and design services lay the foundation for a successful collaboration. We listen, understand, and conceptualize, working closely with you to create a blueprint that aligns with your aspirations."
            className={styles.side__card}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
