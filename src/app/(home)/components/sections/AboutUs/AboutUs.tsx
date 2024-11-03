import SectionText from "@/components/SectionText/SectionText";
import Image from "next/image";
import styles from "./AboutUs.module.scss";
const AboutUs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__lines}>
        <Image src="/assets/images/common/lines-about-us.png" alt="" fill />
        <div className={styles.about__squares}>
          <Image src="/assets/images/common/squares-about-us.png" alt="" fill />
        </div>
      </div>
      <div className={styles.about__content}>
        <div>
          <SectionText title="About Us" text="Know More" />
        </div>
        <div className={styles.about__content__wrapper}>
          <div className={styles.about__content__wrapper__backColor}></div>
          <div className={styles.about__content__wrapper__left}>
            <div className={styles.about__content__wrapper__left__first}>
              <div
                className={styles.about__content__wrapper__left__first__borders}
              ></div>
              <div
                className={styles.about__content__wrapper__left__textWrapper}
              >
                <p
                  className={
                    styles.about__content__wrapper__left__textWrapper__title
                  }
                >
                  Introduction
                </p>
                <p
                  className={
                    styles.about__content__wrapper__left__textWrapper__text
                  }
                >
                  At Fixihaus, we believe that a home is more than just a
                  structure; it&apos;s a reflection of your identity. With a
                  commitment to excellence and a passion for personalized
                  craftsmanship, we specialize in building homes that tell a
                  story.
                </p>
              </div>
              <div className={styles.about__content__wrapper__dashed}></div>
            </div>
            <div className={styles.about__content__wrapper__left__second}>
              <div
                className={
                  styles.about__content__wrapper__left__second__borders
                }
              ></div>
              <div
                className={
                  styles.about__content__wrapper__left__second__imageWrapper__bg
                }
              >
                <Image
                  src="/assets/images/common/about-us-left-first.png"
                  alt=""
                  fill
                />
              </div>
              <div
                className={
                  styles.about__content__wrapper__left__second__imageWrapper
                }
              >
                <div
                  className={
                    styles.about__content__wrapper__left__second__imageWrapper__content
                  }
                >
                  <Image
                    src="/assets/images/common/about-us-left-first.png"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>
            <div className={styles.about__content__wrapper__left__third}>
              <div
                className={styles.about__content__wrapper__left__third__borders}
              ></div>
              <div
                className={styles.about__content__wrapper__left__textWrapper}
              >
                <p
                  className={
                    styles.about__content__wrapper__left__textWrapper__title
                  }
                >
                  Meet the Team
                </p>
                <p
                  className={
                    styles.about__content__wrapper__left__textWrapper__text
                  }
                >
                  Get to know the skilled individuals behind Fixihaus. Our team
                  is comprised of experienced architects, builders, and
                  designers, all united by a shared commitment to turning
                  imagination into reality.
                </p>
              </div>
              <div className={styles.about__content__wrapper__dashed}></div>
            </div>
          </div>
          <div className={styles.about__content__wrapper__right}>
            <div className={styles.about__content__wrapper__right__first}>
              <div
                className={
                  styles.about__content__wrapper__right__first__borders
                }
              ></div>
              <div
                className={
                  styles.about__content__wrapper__right__first__imageWrapper__bg
                }
              >
                <Image
                  src="/assets/images/common/about-us-right-first.png"
                  alt=""
                  fill
                />
              </div>
              <div
                className={
                  styles.about__content__wrapper__right__first__imageWrapper
                }
              >
                <div
                  className={
                    styles.about__content__wrapper__right__first__imageWrapper__content
                  }
                >
                  <Image
                    src="/assets/images/common/about-us-right-first.png"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>
            <div className={styles.about__content__wrapper__right__second}>
              <div
                className={
                  styles.about__content__wrapper__right__second__borders
                }
              ></div>
              <div className={styles.about__content__wrapper__dashed}></div>
              <div
                className={styles.about__content__wrapper__right__textWrapper}
              >
                <p
                  className={
                    styles.about__content__wrapper__right__textWrapper__title
                  }
                >
                  Our Philosophy
                </p>
                <p
                  className={
                    styles.about__content__wrapper__right__textWrapper__text
                  }
                >
                  We embrace the philosophy that each home should be as unique
                  as its owner. Our process is built on collaboration,
                  transparency, and a dedication to bringing your dreams to
                  life.
                </p>
              </div>
            </div>
            <div className={styles.about__content__wrapper__right__third}>
              <div
                className={
                  styles.about__content__wrapper__right__third__borders
                }
              ></div>
              <div
                className={
                  styles.about__content__wrapper__right__third__imageWrapper__bg
                }
              >
                <Image
                  src="/assets/images/common/about-us-right-second.png"
                  alt=""
                  fill
                />
              </div>
              <div
                className={
                  styles.about__content__wrapper__right__third__imageWrapper
                }
              >
                <div
                  className={
                    styles.about__content__wrapper__right__third__imageWrapper__content
                  }
                >
                  <Image
                    src="/assets/images/common/about-us-right-second.png"
                    alt=""
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
