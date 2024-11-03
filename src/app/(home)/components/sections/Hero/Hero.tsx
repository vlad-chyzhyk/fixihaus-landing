"use client";

import Button from "@/components/Button/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero.module.scss";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    const tl1 = gsap.timeline({
      repeat: Infinity,
      // yoyo: true,
      // repeatDelay: 0.5,
    });
    const tl2 = gsap.timeline({ repeat: Infinity });

    gsap.to(`.${styles.hero__left}`, {
      x: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.hero__right__imageWrapper}`, {
      x: 0,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });
    gsap.to(`.${styles.hero__stats}`, {
      scale: 1,
      rotateY: 360,
      duration: 2,
      ease: "elastic.out(0.8,0.75)",
    });

    tl1.to(
      `.${styles.hero__ellipse1Wrapper}`,
      {
        top: "32svw",
        duration: 1.5,
        ease: "power3",
      },
      ">",
    );
    tl1.to(
      `.${styles.hero__ellipse1Wrapper}`,
      {
        top: "32svw",
        right: "82svw",
        duration: 1.5,
        ease: "power3",
      },
      ">",
    );
    tl1.to(`.${styles.hero__ellipse1Wrapper}`, {
      top: "-15svw",
      right: "-15svw",
      duration: 1.5,
      ease: "power3",
    });
    tl2.to(
      `.${styles.hero__ellipse2Wrapper}`,
      {
        bottom: "33svw",
        left: "-15svw",
        duration: 1.5,
        ease: "power3",
      },
      ">",
    );
    tl2.to(
      `.${styles.hero__ellipse2Wrapper}`,
      {
        bottom: "33svw",
        left: "82svw",
        duration: 1.5,
        ease: "power3",
      },
      ">",
    );
    tl2.to(`.${styles.hero__ellipse2Wrapper}`, {
      bottom: "-15svw",
      left: "-15svw",
      duration: 1.5,
      ease: "power3",
    });
  }, []);

  const handleClick = () => {
    gsap.fromTo(
      `.${styles.hero}`,
      { rotate: 0, duration: 2 },
      {
        rotate: 360,
        duration: 2,
        ease: "elastic.out(0.8,0.75)",
      },
    );
  };

  return (
    <div className={styles.hero}>
      <div className={styles.hero__linesWrapper}>
        <Image src="/assets/images/common/lines.png" alt="Lines" fill />
        <div className={styles.hero__squareWrapper}>
          <Image src="/assets/images/common/squares.png" alt="Lines" fill />
        </div>
      </div>

      <div className={styles.hero__ellipse1Wrapper}>
        <Image src="/assets/images/common/ellipse-1.svg" alt="Lines" fill />
      </div>

      <div className={styles.hero__ellipse2Wrapper}>
        <Image src="/assets/images/common/ellipse-1.svg" alt="Lines" fill />
      </div>

      <div className={styles.hero__lines}>
        <div className={styles.hero__box}>
          <div className={styles.hero__left}>
            <div className={styles.hero__text__box}>
              <div className={styles.hero__title__box}>
                <p className={styles.hero__title__vision}>
                  Your Vision,
                  <span className={styles.hero__title__expertise}>
                    OurExpertise
                  </span>
                </p>
              </div>
              <div className={styles.hero__paragraph}>
                <p>
                  Collaborate with our skilled team to bring your unique vision
                  to life, guided by our years of rebuilding experience.
                </p>
              </div>
            </div>
            <Button onClick={handleClick}>Create Your House</Button>
          </div>
          <div className={styles.hero__right}>
            <div className={styles.hero__right__imageWrapper}>
              <Image
                src="/assets/images/common/hero-house.png"
                alt="House picture"
                fill
              />
            </div>
          </div>
        </div>
        <div className={styles.hero__stats}>
          <div className={styles.hero__stats__indent}>
            <div className={styles.hero__stats__item}>
              <p className={styles.hero__stats__number}>2K</p>
              <div>
                <p className={styles.hero__stats__name}>Clients</p>
                <p className={styles.hero__stats__desc}>For all time</p>
              </div>
            </div>
            <div className={styles.hero__stats__item}>
              <p className={styles.hero__stats__number}>10</p>
              <div>
                <p className={styles.hero__stats__name}>Years</p>
                <p className={styles.hero__stats__desc}>Experience</p>
              </div>
            </div>
            <div className={styles.hero__stats__item}>
              <p className={styles.hero__stats__number}>11</p>
              <div>
                <p className={styles.hero__stats__name}>Offices</p>
                <p className={styles.hero__stats__desc}>in different state</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
