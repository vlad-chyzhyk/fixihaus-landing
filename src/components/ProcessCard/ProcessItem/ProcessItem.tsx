"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./ProcessItem.module.scss";

type Props = {
  title: string;
  text: string;
  num: string;
  className?: string;
  circleGsapClass?: string;
  textGsapClass?: string;
};

gsap.registerPlugin(useGSAP);

const ProcessItem = ({
  title,
  text,
  num,
  className,
  circleGsapClass,
  textGsapClass,
}: Props) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.fromTo(
      `.${styles.wrapper__imageWrapper__circle__img}`,
      { rotate: 0, duration: 6 },
      {
        rotate: 360,
        repeat: Infinity,
        duration: 6,
        ease: "none",
      },
    );
  }, []);

  return (
    <div className={className}>
      <div className={styles.wrapper}>
        <div className={circleGsapClass}>
          <div className={styles.wrapper__imageWrapper__circle}>
            <div className={styles.wrapper__imageWrapper__circle__img}>
              <Image
                src={`/assets/images/common/process-circle.svg`}
                alt="Process item"
                fill
              />
            </div>
            <p className={styles.wrapper__imageWrapper__circle__number}>
              {num}
            </p>
          </div>
          <div className={styles.wrapper__imageWrapper__stick}>
            <Image
              src={`/assets/images/common/process-stick.svg`}
              alt="Process item"
              fill
            />
          </div>
        </div>
        <div className={textGsapClass}>
          <p className={styles.wrapper__title}>{title}</p>
          <p className={styles.wrapper__text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessItem;
