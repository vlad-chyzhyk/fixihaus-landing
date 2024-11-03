"use client";

import ProcessCard from "@/components/ProcessCard/ProcessCard/ProcessCard";
import SectionText from "@/components/SectionText/SectionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Process.module.scss";

gsap.registerPlugin(useGSAP);

const Process = () => {
  useGSAP(() => {
    gsap.to(`.${styles.section__title}`, {
      scrollTrigger: { trigger: `.${styles.process}`, start: "20% center" },
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.process__imageWrapper__squares}`, {
      scrollTrigger: {
        trigger: `.${styles.process}`,
        start: "20% center",
      },
      rotate: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
  }, []);

  return (
    <div className={styles.process}>
      <div className={styles.process__imageWrapper__lines}>
        <div className={styles.process__imageWrapper__squares}>
          <Image src="/assets/images/common/squares-process.png" alt="1" fill />
        </div>
      </div>
      <div className={styles.process__content}>
        <div>
          <SectionText
            title="Process"
            text="How We Work"
            className={styles.section__title}
          />
        </div>
        <div>
          <ProcessCard trigger={styles.process} />
        </div>
      </div>
    </div>
  );
};

export default Process;
