"use client";

import { FAQdata } from "@/components/FAQDropdown/FAQdata";
import FAQDropdown from "@/components/FAQDropdown/FAQDropdown";
import SectionText from "@/components/SectionText/SectionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./FAQ.module.scss";

gsap.registerPlugin(useGSAP);

const FAQ = () => {
  useGSAP(() => {
    gsap.to(`.${styles.answers__squares}`, {
      scrollTrigger: { trigger: `.${styles.answers}`, start: "top center " },
      rotate: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.section__text}`, {
      scrollTrigger: { trigger: `.${styles.answers}`, start: "top center " },
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.answers__content__box}`, {
      scrollTrigger: { trigger: `.${styles.answers}`, start: "top center " },
      height: "auto",
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
  }, []);

  return (
    <div className={styles.answers}>
      <div className={styles.answers__lines}>
        <Image src="/assets/images/common/lines-faq.png" alt="" fill />
        <div className={styles.answers__squares}>
          <Image src="/assets/images/common/squares-faq.png" alt="" fill />
        </div>
      </div>
      <div className={styles.answers__content}>
        <div>
          <SectionText
            title="FAQ"
            text="Get Answers"
            className={styles.section__text}
          />
        </div>
        <div className={styles.answers__content__box}>
          {FAQdata.map((item, index) => (
            <FAQDropdown
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
