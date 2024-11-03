"use client";

import BenefitCard from "@/components/BenefitCard/BenefitCard";
import SectionText from "@/components/SectionText/SectionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./OurBenefits.module.scss";

gsap.registerPlugin(useGSAP);

const OurBenefits = () => {
  useGSAP(() => {
    gsap.to(`.${styles.benefit__squares}`, {
      scrollTrigger: { trigger: `.${styles.benefit}`, start: "top center" },
      rotate: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.benefit__content__first}`, {
      scrollTrigger: { trigger: `.${styles.benefit}`, start: "top center" },
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.benefit__content__second}`, {
      scrollTrigger: { trigger: `.${styles.benefit}`, start: "top center" },
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.benefit__content__third}`, {
      scrollTrigger: { trigger: `.${styles.benefit}`, start: "top center" },
      x: 0,
      delay: 0.1,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.7,0.75)",
    });
    gsap.to(`.${styles.benefit__content__fourth}`, {
      scrollTrigger: { trigger: `.${styles.benefit}`, start: "top center" },
      x: 0,
      delay: 0.1,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.7,0.75)",
    });
    gsap.to(`.${styles.benefit__content__fifth}`, {
      scrollTrigger: { trigger: `.${styles.benefit}`, start: "top center" },
      y: 0,
      delay: 0.15,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.5,0.75)",
    });
  }, []);

  return (
    <div className={styles.benefit}>
      <div className={styles.benefit__lines}>
        <Image
          src="/assets/images/common/lines-benefits.png"
          alt="Background"
          fill
        />
        <div className={styles.benefit__squares}>
          <Image
            src="/assets/images/common/squares-benefits.png"
            alt="Background"
            fill
          />
        </div>
      </div>
      <div className={styles.benefit__content}>
        <div>
          <SectionText title="Our Benefits" text="Know why you choose us" />
        </div>
        <div className={styles.benefit__content__wrapper}>
          <div className={styles.benefit__content__wrapper__box}>
            <div className={styles.benefit__content__wrapper__top}>
              <BenefitCard
                imageSrc="benefit-1.svg"
                title="Quality Materials:"
                text="Your home deserves the best. We use top-notch materials to ensure longevity, energy efficiency, and a timeless aesthetic. Quality you can see and feel in every corner of your new home."
                className={styles.benefit__content__first}
              />
              <BenefitCard
                imageSrc="benefit-1.svg"
                title="Expert Craftsmanship"
                text="Experience the highest level of craftsmanship with our skilled builders. From foundation to finishing touches, we take pride in delivering homes of exceptional quality and durability."
                className={styles.benefit__content__second}
              />
            </div>
            <div className={styles.benefit__content__wrapper__bottom}>
              <BenefitCard
                imageSrc="benefit-1.svg"
                title="Deadlines"
                text="We understand the importance of time. Our efficient project management ensures timely completion without compromising on the quality. Move into your new home on schedule."
                className={styles.benefit__content__third}
              />
              <BenefitCard
                imageSrc="benefit-1.svg"
                title="Budget-Friendly"
                text="Luxury doesn't have to come at a high cost. Explore budget-friendly options without compromising on style or functionality. We work with you to create the perfect balance."
                className={styles.benefit__content__fourth}
              />
            </div>
          </div>
          <div>
            <BenefitCard
              imageSrc="benefit-1.svg"
              title="Personalized Design"
              text="Every home is unique, and so is our approach. Enjoy a personalized design experience tailored to your taste, lifestyle, and preferences. Your dream home, your way."
              className={styles.benefit__content__fifth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
